/* eslint-disable no-undef */
// import Prismic from "prismic-javascript";
import Prismic from "@prismicio/client";

// Client method to query documents from the Prismic repo
export const Client = (req = null) =>
  Prismic.client(
    "https://ihsan.cdn.prismic.io/api/v2",
    createClientOptions(req, process.env.PRISMIC_TOKEN)
  );

const createClientOptions = (req = null, prismicAccessToken = null) => {
  const reqOption = req ? { req } : {};
  const accessTokenOption = prismicAccessToken
    ? { accessToken: prismicAccessToken }
    : {};
  return {
    ...reqOption,
    ...accessTokenOption,
  };
};
