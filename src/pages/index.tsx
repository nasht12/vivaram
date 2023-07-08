import Head from "next/head";
import Feed from "~/components/feed";
import { PostLayout } from "~/components/layout";

export default function Home() {

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout>
        <div >
        <Feed />
      </div>
    </PostLayout>
    </>
  );
}
