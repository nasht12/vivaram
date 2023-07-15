import Image from "next/image";
import Link from "next/link";
import { LoadingPage } from "~/components/loading";
import { api } from "~/utils/api";

export default function Feed() {
  const { data, isLoading } = api.posts.getAll.useQuery();

  if (!data || isLoading) return <LoadingPage />;

  return (
      <div className="flex flex-wrap gap-10 border-t border-black m-4 p-4">
        {[...data]?.map(({ post }) => (
          <div
            key={post.id}
            className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5"
          >
            <Link href={{ pathname: `/post/${post.id}` }} key={post.id}>
              <div className="flex flex-col">
                <div className="flex-shrink-0">
                  <Image
                    src={post.imageUrl}
                    alt="car!"
                    width="300"
                    height="64"
                    quality={75}
                    priority={true}
                  />
                </div>
                <div className="overflow-hidden pt-2 ">
                  <h2 className="text-xs font-medium sm:text-sm md:text-base line-clamp-2">{post.title}</h2>
                </div>
              </div>
            </Link>
          </div>
        ))}
      </div>
  );
}
