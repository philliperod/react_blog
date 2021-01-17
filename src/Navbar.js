const Navbar = ({ container, header, links, link }) => {
  return (
    <nav className={container}>
      <h1 className={header}>The Philosoblog</h1>
      <div className={links}>
        <a href='/' className={link}>
          Home
        </a>
        <a href='/create' className={link}>
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;

// this is called a stateless functional component
