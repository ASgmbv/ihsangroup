import fetch from "isomorphic-fetch";
//www.nbkr.kg/XML/daily.xml
export default async (req, res) => {
  const dd = await fetch("www.nbkr.kg/XML/daily.xml");
  console.log({ dd });
  res.status(200).json({ name: "John Doe" });
};
