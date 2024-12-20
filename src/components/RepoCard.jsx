import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHdd } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, tag, framework, size, updatedTime }) => {
  return (
    <div className=" p-2 border border-gray-300 ">
      {/* Title and Tag */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span className="bg-blue-500 text-xs font-medium px-2 py-1 rounded-md">
          {tag}
        </span>
      </div>

      {/* Description */}
      <p className="text-gray-700 text-sm mb-4">{description}</p>

      {/* Additional Info */}
      <div className="flex items-center text-sm text-gray-500">
        {/* Framework */}
        <span className="mr-4">
          <span className="text-blue-500">&#x25CF;</span> {framework}
        </span>

        {/* Size */}
        <span className="mr-4">
          <FontAwesomeIcon icon={faHdd} className="mr-2" />
          {(size / 1024).toFixed(2)} MB
        </span>

        {/* Last Updated */}
        <span>Updated {updatedTime}</span>
      </div>
    </div>
  );
};

// Prop Types validation
Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  framework: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  updatedTime: PropTypes.string.isRequired,
};

export default Card;
