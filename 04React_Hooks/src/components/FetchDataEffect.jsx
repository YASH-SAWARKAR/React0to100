import React, { useEffect } from "react";

const FetchDataEffect = () => {
  const [posts, setPosts] = React.useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/posts");
      const data = await res.json();
      setPosts(data);
    };

    fetchData();
  }, []);
  return (
    <div>
      <h1>First Post Title</h1>
      {posts.length > 0 ? <h2>{posts[0].title}</h2> : <h2>Loading...</h2>}
    </div>
  );
};

export default FetchDataEffect;
