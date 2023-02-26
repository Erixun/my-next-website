import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Link from "next/link";
import TheIntroduction from "../components/TheIntroduction";
import TheSkills from "../components/TheSkills";
import TheBookShelf from "../components/TheBookShelf";
import TheHometown from "../components/TheHometown";
import TheBlockQuote from "../components/TheBlockQuote";
import TheCurrentlyWorkingOn from "../components/TheCurrentlyWorkingOn";
import ThePodcasts from "../components/ThePodcasts";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <Link rel="stylesheet" href="devicon.min.css" />
      </Head>
      <TheIntroduction />
      <TheSkills />
      <TheHometown />
      <TheCurrentlyWorkingOn />
      <TheBookShelf />
      <TheBlockQuote />
      <ThePodcasts />
    </Layout>
  );
}
