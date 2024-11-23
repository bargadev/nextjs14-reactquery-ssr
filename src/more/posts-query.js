import { getPosts } from "./get-posts";

// src/more/posts-query.js
export const postsQueryConfig = {
  queryKey: ["posts"],
  queryFn: async () => {
    const posts = await getPosts();
    return posts;
  },
};
