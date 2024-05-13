import PropTypes from "prop-types";

const Testimonial = ({ name, avatar, testimonial }) => {
  return (
    <li className="testimonials-item">
      <div className="content-card">
        <figure className="testimonials-avatar-box">
          <img src={avatar} alt="" width="60" />
        </figure>
        <h3 className="h4 testimonials-item-title">{name}</h3>
        <div className="testimonials-text">
          <p>{testimonial}</p>
        </div>
      </div>
    </li>
  );
};

Testimonial.propTypes = {
  name: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  testimonial: PropTypes.string.isRequired,
};

export default Testimonial;
