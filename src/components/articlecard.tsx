import Image from "next/image";
import Link from "next/link";
import { Article } from "types";

export default function ArticleCard(props: Article) {
  return (
    <div className="">
      <Link href={`/post/${props.id}`}>
        <div className="items-center justify-center overflow-auto pt-2">
          <h2 className="font-medium">{props.title}</h2>
        </div>
        <div className="">
          <Image
            src={props.imageUrl ?? ""}
            alt="car!"
            width="320"
            height="160"
            priority={true}
          />
        </div>
      </Link>
    </div>
  );
}
