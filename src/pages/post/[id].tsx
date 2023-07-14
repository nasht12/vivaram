import { PostLayout } from "~/components/layout";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";
import { useRouter } from "next/router";
import Image from "next/image";
import dayjs from "dayjs";
import ArticleCard from "~/components/articlecard";
import { Article } from "types";

export default function PostPage() {
  const router = useRouter();

  // const queryKey = 'id';
  // const queryValue = router.query[queryKey] || router.asPath.match(new RegExp(`[&?]${queryKey}=(.*)(&|$)`))
  let postId = router.query["id"];

  if (!postId) return;
  if (Array.isArray(postId)) {
    postId = postId[0];
  }
  if (typeof postId !== "string") {
    // Here you can decide what to do when `id` is not a string.
    // You might want to throw an error, return, set a default value, etc.
    throw new Error("ID must be a string");
  }

  const { data, isLoading } = api.posts.get.useQuery({ id: postId });

  if (!data || isLoading) return <LoadingPage />;

  console.log("data", data);
  const art1: Article = {id: 'cljt1c1tl0000cc30x25ubq3k', title: "Don't Join Threads - Make Threads Join You", imageUrl: "https://res.cloudinary.com/dqrh2zt1f/image/upload/v1688762547/cld-sample-2.jpg" }


  return (
    <>
      <PostLayout>
        <div className="h-screen items-center justify-center border-t-2 border-black p-4 md:flex">
          <h1 className="md: text-md flex items-center justify-center text-sm font-bold lg:text-2xl lg: pr-8 lg: mr-2">
            {data.title}
          </h1>
          <div className="relative lg: h-150 lg: w-200">
          <Image
            src={data.imageUrl || "alt"}
            className="h-auto max-w-full items-center justify-center"
            alt="pic"
            width="800"
            height="600"
          />
          </div>
        </div>
        <div className="border-t-2 border-black p-4">
          <h1 className="text-xs">{`${dayjs(data.createdAt).format(
            "MMMM D, YYYY"
          )}`}</h1>
          <h1 className="bg-black p-2 align-middle text-xl leading-none text-white">
            Abhinash Tummala
          </h1>
        </div>
        <p className="py-6">{data.content}</p>
      </PostLayout>
      <ArticleCard {...art1}/>
    </>
  );
}
