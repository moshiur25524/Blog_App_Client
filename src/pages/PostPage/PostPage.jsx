import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
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
      <div className="edit-row">
        <Link className="edit-btn" to={`/edit/${postInfo._id}`}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
            />
          </svg>
          Edit this Post
        </Link>
      </div>
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
