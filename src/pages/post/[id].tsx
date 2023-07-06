import { UserButton, useUser } from "@clerk/nextjs";
import Head from "next/head";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";

export default function PostPage() {

  const { user } = useUser();
  const hello = api.example.hello.useQuery({ text: "from tRPC" });
  const { data, isLoading } = api.posts.getAll.useQuery();

  if(!data || isLoading) return <LoadingPage />

  console.log('data', data)
  console.log('user', user)

  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="flex min-h-screen flex-col p-8 justify-start items-center bg-gradient-to-b from-[#999999] to-[#000000]">
    <div className="flex justify-end">
    <UserButton afterSignOutUrl="/" />
  </div>
  <div className="txt-lg text-white">
    Vivaram
  </div>
  <div>
    Post view
  </div>
</main>
    </>
  );
}
