// src/app/page.js
import Posts from "@/more/posts";
import { postsQueryConfig } from "@/more/posts-query";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";

export default async function PostsPage() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(postsQueryConfig);

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <div>
        <h1>PostsPage</h1>
        <Posts />
      </div>
    </HydrationBoundary>
  );
}
