// app/page.js

"use client";
import { useEffect, useState } from "react";

export default function PageContent() {
  const [posts, setPosts] = useState([]);

  const fetchPosts = async () => {
    const res = await fetch("https://jsonplaceholder.typicode.com/posts");
    const posts = await res.json();
    setPosts(posts);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div>
      <h1>Page</h1>
      <ul>
        {posts.length === 0 ? (
          <li>Loading...</li>
        ) : (
          posts.map((post) => <li key={post.id}>{post.title}</li>)
        )}
      </ul>
    </div>
  );
}
