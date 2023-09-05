import "./Posts.css";

const Post = ({ title, summary, image, date, author }) => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img src={image} alt="" />
        </div>
        <div className="texts">
          <h2>{title}</h2>
          <p className="info">
            <a href="" className="author">
              {author}
            </a>
            <time>{date}</time>
          </p>
          <p className="summary">{summary}</p>
        </div>
      </div>
    </>
  );
};

export default Post;
