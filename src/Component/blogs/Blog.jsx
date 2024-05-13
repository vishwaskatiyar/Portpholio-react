import { useEffect, useState } from "react";
import Blogpost from "./Blogpostsss";
import "./blog.css";

const Blog = () => {
  const [blogs, setBlogs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(4);

  useEffect(() => {
    fetch("blogs.json")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = blogs.slice(indexOfFirstPost, indexOfLastPost);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <section className="blog">
        <header>
          <h2 className="h2 article-title">Blogs</h2>
        </header>
        <div className="blog-posts">
          <ul className="blog-posts-list">
            {currentPosts.map((post, index) => (
              <Blogpost key={index} post={post} />
            ))}
          </ul>
        </div>
        <nav>
          <ul className="pagination">
            <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <button
                onClick={() => paginate(currentPage - 1)}
                className="page-link"
              >
                Previous
              </button>
            </li>
            {Array.from(
              { length: Math.ceil(blogs.length / postsPerPage) },
              (_, index) => (
                <li
                  key={index}
                  className={`page-item ${
                    currentPage === index + 1 ? "active" : ""
                  }`}
                >
                  <button
                    onClick={() => paginate(index + 1)}
                    className="page-link"
                  >
                    {index + 1}
                  </button>
                </li>
              )
            )}
            <li
              className={`page-item ${
                currentPage === Math.ceil(blogs.length / postsPerPage)
                  ? "disabled"
                  : ""
              }`}
            >
              <button
                onClick={() => paginate(currentPage + 1)}
                className="page-link"
              >
                Next
              </button>
            </li>
          </ul>
        </nav>
      </section>
    </>
  );
};

export default Blog;
