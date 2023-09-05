import "./Posts.css";

const Posts = () => {
  return (
    <>
      <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVjaG5vbG9neXxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60"
            alt=""
          />
        </div>
        <div className="texts">
          <h2>Full-house battery backup coming later this year</h2>
          <p className="info">
            <a href="" className="author">
              Moshiur Rahman
            </a>
            <time>2023-01-06 16:45</time>
          </p>
          <p className="summary">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio,
            inventore? Iusto cumque totam expedita quasi vitae voluptate
            deserunt, quo mollitia?
          </p>
        </div>
      </div>
    </>
  );
};

export default Posts;
