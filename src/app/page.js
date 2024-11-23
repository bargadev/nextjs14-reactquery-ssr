// app/posts/page.tsx

import { getPosts } from "@/more/get-posts";
import Posts from "@/more/posts";

export const dynamic = "force-static"; // Enforces SSG instead of SSR

export default async function PostsPage() {
  // const queryClient = new QueryClient();

  // await queryClient.prefetchQuery({
  //   queryKey: ["posts"],
  //   queryFn: getPosts,
  // });

  const data = await getPosts();

  return (
    // Neat! Serialization is now as easy as passing props.
    // HydrationBoundary is a Client Component, so hydration will happen there.
    // <HydrationBoundary state={dehydrate(queryClient)}>
    <div>
      <h1>PostsPage</h1>
      <Posts initialData={data} />
    </div>
    // </HydrationBoundary>
  );
}
