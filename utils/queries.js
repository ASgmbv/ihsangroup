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
    name: post.name,
    description: post.description,
    photo: post.photo?.url,
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

const FAQ = (post) => {
  if (!post) return {};
  return {
    question: post.question,
    answer: post.answer,
  };
};

const Review = (post) => {
  if (!post) return {};
  return {
    image: post.image?.url,
    description: post.description,
  };
};

const Office = (post) => {
  if (!post) return {};
  return {
    image: post.image?.url,
    phones: post.phones,
    name: post.name,
    address: post.address,
    email: post.email,
  };
};

const Mission = (post) => {
  if (!post) return {};
  return {
    photo: post.photo?.url,
    title: post.title,
    description: post.description,
    name: post.name,
  };
};

const ExpertOpinion = (post) => {
  if (!post) return {};
  return {
    photo: post.photo?.url,
    title: post.title,
    description: post.description,
    name: post.name,
  };
};

const Quality = (post) => {
  if (!post) return {};
  return {
    title: post.title,
    qualities: post.quality,
  };
};

const Step = (post) => {
  if (!post) return {};
  return {
    title: post.title,
    description: post.description,
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
  const members = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "team")
  );

  result.results[0]?.data?.team?.map((post) => {
    members.push(TeamMember(post));
  });

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

export async function queryFAQs() {
  const questions = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "questions")
  );

  result.results[0]?.data?.questions?.map((post) => {
    questions.push(FAQ(post));
  });

  return questions;
}

export async function queryReviews() {
  const reviews = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "reviews")
  );

  result.results[0]?.data?.reviews?.map((post) => {
    reviews.push(Review(post));
  });

  return reviews;
}

export async function queryOffices() {
  const offices = [];

  const result = await Client().query(
    Prismic.Predicates.at("document.type", "offices")
  );

  result.results[0]?.data?.offices?.map((post) => {
    offices.push(Office(post));
  });

  return offices;
}

export async function queryMission() {
  const result = await Client().query(
    Prismic.Predicates.at("document.type", "mission")
  );

  return Mission(result.results[0]?.data);
}

export async function queryExpertOpinion() {
  const result = await Client().query(
    Prismic.Predicates.at("document.type", "expert_opinion")
  );

  return ExpertOpinion(result.results[0]?.data);
}

export async function queryQualities() {
  const result = await Client().query(
    Prismic.Predicates.at("document.type", "qualities")
  );

  const qualities = [];

  result.results[0]?.data?.qualities?.map((post) => {
    qualities.push(Quality(post));
  });

  return qualities;
}

export async function querySteps() {
  const result = await Client().query(
    Prismic.Predicates.at("document.type", "steps")
  );

  const steps = [];

  console.log({ result });

  result.results[0]?.data?.steps?.map((post) => {
    steps.push(Step(post));
  });

  return steps;
}
