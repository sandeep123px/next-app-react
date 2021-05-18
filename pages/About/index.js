
import { NextSeo } from "next-seo";
export default function About() {
  const SEO = {
    title: "About",
    description: "this is normal about page",
  };
  return (
    <>
      <NextSeo {...SEO} />
      <h1>About page</h1>
    </>
  );
}
