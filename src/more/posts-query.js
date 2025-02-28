export const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  if (!response.ok) {
    throw new Error("Network response was not ok");
  }

  const data = await response.json();

  console.log(data);

  return data;
};

// src/more/posts-query.js
export const postsQueryConfig = {
  queryKey: ["posts"],
  queryFn: async () => {
    const posts = await getPosts();
    return posts;
  },
};
