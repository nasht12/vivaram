import { SignIn } from "@clerk/nextjs";
import Feed from "~/components/feed";
import { PostLayout } from "~/components/layout";
import TopFeed from "~/components/topfeed";

export default function SignInPage() {
  return <>
  <SignIn />
    <PostLayout>
      <div >
        <TopFeed />
        <Feed />
    </div>
  </PostLayout>
</>
}