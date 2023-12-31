import { useState } from "react";
import "react-quill/dist/quill.snow.css";
import Editor from "../Editor/Editor";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  const createNewPost = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.set("title", title);
    data.set("summary", summary);
    data.set("content", content);
    data.set("files", files[0]);
    console.log(title, summary, files, content);
  };

  return (
    <div>
      <form onSubmit={createNewPost}>
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
        <button style={{ marginTop: "5px" }}>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
