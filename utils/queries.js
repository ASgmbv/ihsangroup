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
