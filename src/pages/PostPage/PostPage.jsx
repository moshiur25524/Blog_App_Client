import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./PostPage.css";
import { formatISO9075 } from "date-fns";

const PostPage = () => {
  const [postInfo, setPostInfo] = useState({});
  const { id } = useParams();

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((data) => {
        setPostInfo(data);
      });
  }, []);
  console.log(id);
  return (
    <div className="post-page">
      <h1>Introduction to Web Development</h1>
      <time>{formatISO9075(new Date("2023-09-05"))}</time>
      <div className="author">by Moshiur Rahman</div>
      <div className="image">
        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
          alt=""
        />
      </div>

      <div className="content">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident,
          distinctio veritatis adipisci beatae quis aspernatur ratione harum
          commodi id, aut debitis ut, voluptate velit itaque animi. Eos at cum
          possimus nisi ipsum atque quam. Vero harum ex optio iusto quia. Dicta
          minus nulla ratione? Aspernatur laboriosam delectus explicabo aut
          tempora.
        </p>
      </div>
    </div>
  );
};

export default PostPage;
