/* eslint-disable no-undef */
import Prismic from "prismic-javascript";
// import Prismic from "@prismicio/client";

// Client method to query documents from the Prismic repo
export const Client = () =>
  Prismic.client("https://ihsan.cdn.prismic.io/api/v2", {
    accessToken: process.env.PRISMIC_TOKEN,
  });
