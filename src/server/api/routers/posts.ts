import { clerkClient } from "@clerk/nextjs";
import type { User } from "@clerk/nextjs/dist/types/server";
import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

const filterAuthorClient = (user: User) => {
    return { id: user.id, username: user.username, profilePicture: user.profileImageUrl }
}

export const postsRouter = createTRPCRouter({

  getAll: publicProcedure.query(async ({ ctx }) => {
    const posts = await ctx.prisma.post.findMany({take: 100});

    const users = (await clerkClient.users.getUserList({
        userId: posts.map((post)=> post.authorId),
        limit: 100
    })).map(filterAuthorClient)
    
    return posts.map((post) => ({
        post,
        author: users.find((user)=> user.id === post.authorId
        )}
    ));
  }),

  get: publicProcedure.input(z.object({id: z.string()}))
  .query(async ({ ctx, input })=> {
    const post = await ctx.prisma.post.findFirst({
      where: {
        id: input.id
      }
    })
    return post;
  }),
  
});
