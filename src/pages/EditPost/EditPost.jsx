import { useEffect, useState } from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor/Editor";
import { Navigate, useParams } from "react-router-dom";

const EditPost = () => {
  const { id } = useParams();
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [cover, setCover] = useState("");
  const [files, setFiles] = useState("");
  const [redirect, setRedirect] = useState(false);

  useEffect(() => {
    fetch()
      .then((res) => res.json())
      .then((data) => {
        setTitle(data.title);
        setContent(data.content);
        setSummary(data.summary);
      });
  }, []);

  const handleEditPost = async (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("files", files[0]);
    console.log(title, summary, files, content);

    await fetch("", {
      method: "PUT",
      body: data,
    });
    setRedirect(true);
  };

  if (redirect) {
    return <Navigate to={`/post/${id}`} />;
  }

  return (
    <div>
      <form onSubmit={handleEditPost}>
        <input
          type="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="summary"
          value={summary}
          onChange={(e) => setSummary(e.target.value)}
          placeholder="Summary"
        />
        <input
          type="file"
          value={files}
          onChange={(e) => setFiles(e.target.value)}
        />
        <Editor onChange={setContent} value={content} />
        <button style={{ marginTop: "5px" }}>Edit Post</button>
      </form>
    </div>
  );
};

export default EditPost;
