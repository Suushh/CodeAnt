import PropTypes from "prop-types";
import Logo from "../assets/Images/Logo.png"; // Import your logo image
// import HomeIcon from "../assets/Images/HomeIcon.png"; // Import custom icons
// import AiCodeReviewIcon from "../assets/Images/CodeIcon.png";
// import CloudSecurityIcon from "../assets/Images/CloudIcon.png";
// import SettingsIcon from "../assets/Images/SettingsIcon.png";
// import HowToUseIcon from "../assets/Images/UseIcon.png";
import { FaHome, FaCode, FaCloud, FaBook, FaCog } from "react-icons/fa"; // Import icons

const Sidebar = ({ userName, pages, selectedPage, onPageSelect }) => {
  // Define an icon for each page using custom icons
  const pageIcons = {
    "Repositories": <FaHome />,
    "AI Code Review": <FaCode />,
    "Cloud Security": <FaCloud />,
    "How to Use": <FaBook />,
    "Settings": <FaCog />,
  };

  return (
    <aside className="w-[20%] bg-gray-100 border-r border-gray-300">
      {/* Logo */}
      <div className="flex-col items-center justify-center p-4">
        <div className="flex justify-center m-4">
          <img src={Logo} alt="Logo" className="h-12" /> {/* Adjust height as needed */}
        </div>
        {/* User Info */}
        <div className="flex justify-center items-center bg-white p-2 rounded-lg w-full  mb-0 border border-gray-300 hover:bg-gray-100 text-xl">
          {userName}
        </div>
      </div>

      {/* Pages */}
      <nav className="flex-col justify-center items-center">
        {pages.map((page) => (
          <div
            key={page}
            onClick={() => onPageSelect(page)}
            className={`p-3 cursor-pointer rounded-lg w-[80%] ml-7 mt-1 flex items-center space-x-3 ${
              selectedPage === page
                ? "bg-blue-500 text-white"
                : "text-gray-700 hover:bg-gray-200"
            }`}
          >
            <span className="text-lg">{pageIcons[page]}</span> {/* Render icon */}
            <span>{page}</span> {/* Display page name */}
          </div>
        ))}
      </nav>
    </aside>
  );
};

// Prop Types validation
Sidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPage: PropTypes.string.isRequired,
  onPageSelect: PropTypes.func.isRequired,
};

export default Sidebar;
