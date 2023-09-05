import { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState("");

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  const formats = [
    "header",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
  ];

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
        <ReactQuill
          theme="snow"
          modules={modules}
          formats={formats}
          value={content}
          onChange={(newValue) => setContent(newValue)}
        />
        <button style={{ marginTop: "5px" }}>Create Post</button>
      </form>
    </div>
  );
};

export default CreatePost;
