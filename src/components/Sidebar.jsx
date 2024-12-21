import { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/Images/Logo.png"; 
import { FaHome, FaCode, FaCloud, FaBook, FaCog, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ userName, pages, selectedPage, onPageSelect, darkMode }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const pageIcons = {
    Repositories: <FaHome />,
    "AI Code Review": <FaCode />,
    "Cloud Security": <FaCloud />,
    "How to Use": <FaBook />,
    Settings: <FaCog />,
  };

  return (
    <>
      <button
        onClick={toggleSidebar}
        className={`lg:hidden p-2 m-2 rounded-md absolute top-4 right-4 ${
          darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
        }`}
      >
        <FaBars />
      </button>

      <aside
        className={`fixed top-0 left-0 w-full lg:relative lg:w-[20%] z-50 transition-transform duration-300 ease-in-out ${
          darkMode ? "bg-gray-800 text-white border-gray-700" : "bg-gray-100 border-gray-300"
        } ${
          isSidebarOpen
            ? "translate-y-0"
            : "-translate-y-full"
        } lg:translate-y-0 lg:block`}
      >
        <button
          onClick={toggleSidebar}
          className={`absolute top-4 right-4 lg:hidden p-2 rounded-md ${
            darkMode ? "bg-gray-700 text-white" : "bg-gray-200 text-gray-700"
          }`}
        >
          <FaTimes />
        </button>

        <div
  className={`flex flex-col items-start justify-center p-4 border-b ${
    darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
  }`}
>
<img
    src={Logo}
    alt="Logo"
    className="h-12"
    style={{
      backgroundColor: darkMode ? "white" : "transparent", // Inline style as fallback
      marginBottom: 10,
      width: 500
    }}
  />
          <div
            className={`p-2 rounded-lg border w-full text-center ${
              darkMode ? "bg-gray-700 border-gray-600 hover:bg-gray-600" : "bg-white border-gray-300 hover:bg-gray-100"
            }`}
          >
            {userName}
          </div>
        </div>

        <nav className="flex flex-col mt-4 space-y-1">
          {pages.map((page) => (
            <div
              key={page}
              onClick={() => {
                onPageSelect(page);
                setIsSidebarOpen(false);
              }}
              className={`p-3 cursor-pointer rounded-lg flex items-center space-x-3 mx-4 ${
                selectedPage === page
                  ? darkMode
                    ? "bg-blue-600 text-white"
                    : "bg-blue-500 text-white"
                  : darkMode
                    ? "text-gray-300 hover:bg-gray-700"
                    : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{pageIcons[page]}</span>
              <span>{page}</span>
            </div>
          ))}
        </nav>
      </aside>

      {isSidebarOpen && (
        <div onClick={toggleSidebar} className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"></div>
      )}
    </>
  );
};

Sidebar.propTypes = {
  userName: PropTypes.string.isRequired,
  pages: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedPage: PropTypes.string.isRequired,
  onPageSelect: PropTypes.func.isRequired,
  darkMode: PropTypes.bool.isRequired,
};

export default Sidebar;
