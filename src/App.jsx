import { useEffect, useState } from "react";
import "./App.css";
import Post from "./pages/Posts/Posts";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((posts) => setPosts(posts));
  }, []);
  return (
    <>
      <div>
        {posts.map((post) => (
          <Post key={post._id} {...post} />
        ))}
      </div>
    </>
  );
}

export default Home;
