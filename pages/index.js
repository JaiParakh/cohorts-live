import Link from "next/link";
import Head from "next/head";

import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import Date from "../components/date";

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>[Hi, I am Sanket]</p>
        <p>
          (This is a sample website - you’ll be building a site like this on{" "}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>

      <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {
            allPostsData &&
              allPostsData.map(({ id, date, title }) => (
                <li className={utilStyles.listItem} key={id}>
                  <Link href={`/posts/${id}`}>
                    <a>{title}</a>
                  </Link>
                  <br />
                  <small className={utilStyles.lightText}>
                    <Date dateString={date} />
                  </small>
                </li>
              ))
            // <h2>{allPostsData.title}</h2>
          }
        </ul>
      </section>
    </Layout>
  );
}

export async function getStaticProps() {
  // const res = await fetch("https://jsonplaceholder.typicode.com/todos/2");
  // const allPostsData = await res.json();

  const allPostsData = getSortedPostsData();

  if (!allPostsData) {
    return {
      notFound: true,
    };
  }

  return {
    props: { allPostsData },
  };
}
