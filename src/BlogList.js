const BlogList = ({
  blogs,
  title,
  preview,
  previewHeader,
  button,
  handleDelete,
}) => {
  return (
    <div className='blog-list'>
      <h2>{title}</h2>
      {blogs.map((blog) => {
        return (
          <div className={preview} key={blog.id}>
            <h2 className={previewHeader}>{blog.title}</h2>
            <p>Written by {blog.author}</p>
            <button className={button} onClick={() => handleDelete(blog.id)}>
              Delete Blog
            </button>
          </div>
        );
      })}
    </div>
  );
};

export default BlogList;
