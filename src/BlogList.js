const BlogList = ({ blogs, title, preview, previewHeader }) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className={preview} key={blog.id}>
            <h2 className={previewHeader}>{blog.title}</h2>
            <p>Written by {blog.author}</p>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
