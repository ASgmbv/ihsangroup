import { Client } from "../prismic-configuration";
import Prismic from "@prismicio/client";

const NewsType = (post) => {
  if (!post) return {};
  return {
    id: post.id,
    title: post.data.title,
    image: post.data.image.url,
    text: post.data.text,
    date: post.last_publication_date.substring(0, 19),
  };
};

const TeamMember = (post) => {
  if (!post) return {};
  return {
    id: post.id,
    name: post.data.name,
    position: post.data.position,
    image: post.data.image?.url,
  };
};

const Program = (post) => {
  if (!post) return {};
  return {
    name: post.name,
    deposit: post.deposit,
    fee: post.fee,
    financingPeriod: post.financing_period,
    fundingAmount: post.funding_amount,
    realEstateTypes: post.real_estate_types,
    waitingPeriod: post.waiting_period,
  };
};

const Guarantee = (post) => {
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
    icon: post.icon?.url,
  };
};

export async function queryNews() {
  let response;
  let posts = [];
  let page = 1;

  do {
    response = await Client().query(
      Prismic.Predicates.at("document.type", "news"),
      {
        orderings: "[document.last_publication_date desc]",
        page,
      }
    );

    response.results.forEach((post) => {
      posts.push(NewsType(post));
    });

    page++;
  } while (response.next_page);

  return posts;
}

export async function queryLastTwoNews() {
  let posts = await Client().query(
    Prismic.Predicates.at("document.type", "news"),
    {
      orderings: "[document.last_publication_date desc]",
      page: 1,
      pageSize: 2,
    }
  );

  posts = posts.results.map((post) => {
    return NewsType(post);
  });

  return posts;
}

export async function queryNewsById(id) {
  let post = await Client().query(Prismic.Predicates.at("document.id", id));

  return NewsType(post.results[0]);
}

export async function queryTeamMembers() {
  let response;
  let members = [];
  let page = 1;

  do {
    response = await Client().query(
      Prismic.Predicates.at("document.type", "member"),
      { page }
    );

    response.results.forEach((post) => {
      members.push(TeamMember(post));
    });

    page++;
  } while (response.next_page);

  return members;
}

export async function queryPrograms() {
  const programs = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "programs")
  );

  result.results[0]?.data?.programs?.map((post) => {
    programs.push(Program(post));
  });

  return programs;
}

export async function queryGuarantees() {
  const guarantees = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "guarantees")
  );

  result.results[0]?.data?.guarantees?.map((post) => {
    guarantees.push(Guarantee(post));
  });

  return guarantees;
}
