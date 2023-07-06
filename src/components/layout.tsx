import type { PropsWithChildren } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export const PostLayout = (props: PropsWithChildren) => {

    return (
    <main className="flex min-h-screen flex-col p-8 justify-start items-center bg-gradient-to-b from-[#999999] to-[#000000]">
    <div className="flex justify-end">
    <UserButton afterSignOutUrl="/" />
  </div>
  
  <div className="txt-lg text-white">
  <Link href="/">
    Vivaram
    </Link>
    <div>
        {props.children}
    </div>
  </div>
</main>
);
}