import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHdd } from "@fortawesome/free-solid-svg-icons";

const Card = ({ title, description, tag, framework, size, updatedTime, darkMode }) => {
  return (
    <div
      className={`p-4 border rounded-md shadow-md ${
        darkMode ? "bg-gray-800 border-gray-600 text-white" : "bg-white border-gray-300 text-black"
      }`}
    >
      <div className="flex items-center gap-3 mb-2">
        <h3 className="font-semibold text-lg">{title}</h3>
        <span
  className={`text-xs px-1.5 py-0.5 rounded-lg bg-blue-100 border border-blue-400 text-blue-600 ${
    darkMode ? "bg-blue-900 border-blue-500 text-blue-200" : "bg-blue-100 border-blue-400 text-blue-600"
  }`}
>
          {tag}
        </span>
      </div>

      <p className="mb-4 text-sm">{description}</p>

      <div className="flex items-center text-sm">
        <span className="mr-4 flex items-center">
          <span className={`mr-2 ${darkMode ? "text-blue-300" : "text-blue-500"}`}>&#x25CF;</span>
          {framework}
        </span>

        <span className="mr-4 flex items-center">
          <FontAwesomeIcon icon={faHdd} className="mr-2" />
          {(size / 1024).toFixed(2)} MB
        </span>

        <span className="flex items-center">Updated {updatedTime}</span>
      </div>
    </div>
  );
};

Card.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  framework: PropTypes.string.isRequired,
  size: PropTypes.number.isRequired,
  updatedTime: PropTypes.string.isRequired,
  darkMode: PropTypes.bool,
};

export default Card;
