import type { PropsWithChildren } from "react";
import { UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";

export const PostLayout = (props: PropsWithChildren) => {

    return (
    <main className="flex min-h-screen flex-col p-8 justify-start items-center">
    <div className="flex justify-end">
    <UserButton afterSignOutUrl="/" />
  </div>
  <div className="txt-lg text-black items-cente flex-col">
  <Link href="/">
    Vivaram
    </Link>
  </div>
  <div>
        {props.children}
    </div>
</main>
);
}