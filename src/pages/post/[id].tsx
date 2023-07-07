import Head from "next/head";
import { PostLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";
import { useRouter } from 'next/router'
import Image from "next/image";


export default function PostPage() {

  const router = useRouter();
  const postId = router.query.id;

  const { data, isLoading } = api.posts.get.useQuery({ id: postId }, { enabled: !!postId })

  if(!data || isLoading) return <LoadingPage />

  console.log('data', data)

  return (
    <>
      <Head>
        <title>Post View</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <PostLayout>
        <div>
        <div className="hero min-h-screen bg-base-200">
          <div className="flex p-10 top-20">
        <h1 className="text-4xl font-bold mt-60">{data.title}</h1>
        <Image src="https://cdn.discordapp.com/attachments/416094051339862016/1100205298226053230/DSCF8881.JPG" alt="pic" width="800" height="600" />
        </div>
      <p className="py-6">{data.content}</p>
    </div>
  </div>
    </PostLayout>
    </>
  );
}
