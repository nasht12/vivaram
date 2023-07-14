import Image from "next/image";
import Link from "next/link";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";

export default function TopFeed() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (!data || isLoading) return <LoadingPage />;

  return (
    <div className="m-4 gap-10 border-t border-black p-4 flex">
      <div className="flex-auto m-2">
        {data[0]?.post.id && (
          <Link href={`/post/${data[0]?.post.id}`}>
            <div className="relative">
              <Image
                src={data[0]?.post.imageUrl ?? ""}
                alt="car!"
                width="720"
                height="320"
                priority={true}
                className="h-auto max-w-full items-center justify-center"
              />
            </div>
            <div className="pt-2">
              <h2 className="font-medium">{data[0]?.post.title}</h2>
            </div>
          </Link>
        )}
      </div>
      <div className="flex flex-col">
      <div className="flex m-2 ">
          <div className="flex items-center justify-center overflow-auto pt-2 relative">
            <h2 className="font-medium text-sm md: text-md lg: text-md">{data[1]?.post.title}</h2>
          </div>
          {data[1]?.post.id && (
            <Link href={`/post/${data[2]?.post.id}`}>
              <Image
                src={data[2]?.post.imageUrl ?? ""}
                alt="car!"
                width="480"
                height="160"
                priority={true}
              />
            </Link>
          )}
        </div>
        <div className="flex m-2">
          <div className="flex items-center justify-center overflow-auto pt-2">
            <h2 className="font-medium text-sm md: text-md lg: text-md">{data[1]?.post.title}</h2>
          </div>
          {data[1]?.post.id && (
            <Link href={`/post/${data[2]?.post.id}`}>
              <Image
                src={data[2]?.post.imageUrl ?? ""}
                alt="car!"
                width="480"
                height="160"
                priority={true}
              />
            </Link>
          )}
        </div>
        </div>
      </div>
  );
}
