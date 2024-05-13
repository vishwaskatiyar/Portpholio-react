import PropTypes from "prop-types";

function Blogpost({ post }) {
  const { title, category, date, description, image } = post;
  return (
    <li className="blog-post-items">
      <a href="#">
        <figure className="blog-banner-box">
          <img src={image} alt="" loading="lazy" />
        </figure>
        <div className="blog-content">
          <div className="blog-meta">
            <p className="blog-category">{category}</p>
            <span className="dot"></span>
            <time dateTime={date}>{date}</time>
          </div>
          <h3 className="h3 blog-item-title"> {title}</h3>
          <p className="blog-text">{description}</p>
        </div>
      </a>
    </li>
  );
}

// Define prop types for the Blogpost component
Blogpost.propTypes = {
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
  }).isRequired,
};

export default Blogpost;
