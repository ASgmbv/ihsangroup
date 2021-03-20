/* eslint-disable no-undef */
import Prismic from "@prismicio/client";

export const Client = () =>
  Prismic.client("https://ihsan-group.cdn.prismic.io/api/v2", {
    accessToken: process.env.PRISMIC_TOKEN,
  });
