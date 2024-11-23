// app/posts/posts.tsx
"use client";
import { useQuery } from "@tanstack/react-query";
import { getPosts } from "./get-posts";

function Posts({ initialData }) {
  const { data, error } = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
    initialData: initialData,
  });

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  if (error instanceof Error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h1>Posts</h1>
      <ul>
        {data?.map((post) => (
          <li key={post.id}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
