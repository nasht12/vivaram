import Image from "next/image";
import Link from "next/link";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";

export default function TopFeed() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (!data || isLoading) return <LoadingPage />;

  return (
    <div className="flex flex-col border-t border-black md:flex-row m-4 p-4 gap-4">
      <div className="flex-auto">
        {data[0]?.post.id && (
          <Link href={`/post/${data[0]?.post.id}`}>
            <div className="relative">
              <Image
                src={data[0]?.post.imageUrl ?? ""}
                alt="car!"
                width="720"
                height="320"
                priority={true}
                layout="responsive"
                className="h-auto max-w-full items-center justify-center"
              />
            </div>
            <div className="pt-2">
              <h2 className="line-clamp-2 text-xs font-medium sm:text-sm md:text-base">
                {data[0]?.post.title}
              </h2>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-col gap-4">
      {data[2]?.post.id && (
        <Link href={`/post/${data[2]?.post.id}`}>
          <div className="flex flex-row">
            <h1 className="items-top line-clamp-2 flex text-xs font-medium sm:text-sm md:text-base px-2">
              {data[1]?.post.title}
            </h1>
            <div className="relative">
              <Image
                src={data[2]?.post.imageUrl ?? ""}
                alt="car!"
                width="320"
                height="140"
                priority={true}
                layout="responsive"
                className="h-auto max-w-full items-center justify-center"
              />
            </div>
          </div>
        </Link>
         )}
         {data[2]?.post.id && (
        <Link href={`/post/${data[2]?.post.id}`}>
          <div className="flex flex-row">
            <h1 className="items-top line-clamp-2 flex text-xs font-medium sm:text-sm md:text-base px-2">
              {data[1]?.post.title}
            </h1>
            <div className="relative">
              <Image
                src={data[2]?.post.imageUrl ?? ""}
                alt="car!"
                width="320"
                height="140"
                layout="responsive"
                priority={true}
              />
            </div>
          </div>
        </Link>
         )}
      </div>
    </div>
  );
}
