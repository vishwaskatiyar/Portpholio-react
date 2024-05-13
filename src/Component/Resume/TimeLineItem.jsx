import PropTypes from "prop-types";

function TimeLineItem({ title, date, description, cgpa }) {
  return (
    <li className="timeline-item">
      <h4 className="h4 timeline-item-title">{title}</h4>
      <span>{date}</span>
      <p className="timeline-text">{description}</p>
      <p className="timeline-text">{cgpa}</p>
    </li>
  );
}

TimeLineItem.propTypes = {
  title: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  cgpa: PropTypes.string.isRequired,
};

export default TimeLineItem;
