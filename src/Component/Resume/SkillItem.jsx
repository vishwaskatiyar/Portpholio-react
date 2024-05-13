import PropTypes from "prop-types";

const SkillItem = ({ title, value }) => {
  return (
    <li className="skills-items">
      <div className="title-wrapper">
        <h5 className="h5">{title}</h5>
        <data value={value}>{value}</data>
      </div>
      <div className="skill-progress-bg">
        <div
          className="skill-progress-fill"
          style={{ width: `${value}%` }}
        ></div>
      </div>
    </li>
  );
};

SkillItem.propTypes = {
  title: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
};

export default SkillItem;
