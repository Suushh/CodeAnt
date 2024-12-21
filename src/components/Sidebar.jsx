import { useState } from "react";
import PropTypes from "prop-types";
import Logo from "../assets/Images/Logo.png"; 
import { FaHome, FaCode, FaCloud, FaBook, FaCog, FaBars, FaTimes } from "react-icons/fa";

const Sidebar = ({ userName, pages, selectedPage, onPageSelect }) => {
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
      {/* ✅ Hamburger Button (Top Right) */}
      <button
        onClick={toggleSidebar}
        className="lg:hidden p-2 m-2 text-gray-700 bg-gray-200 rounded-md hover:bg-gray-300 focus:outline-none absolute top-4 right-4"
      >
        <FaBars />
      </button>

      {/* ✅ Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full w-full lg:relative lg:w-[20%] bg-gray-100 border-r border-gray-300 z-50 transition-transform duration-300 ease-in-out ${
          isSidebarOpen
            ? "translate-y-0"  // For small screens, when opened, slide down vertically
            : "-translate-y-full"  // Initially hidden
        } lg:translate-y-0 lg:block`}
      >
        {/* ✅ Close Button */}
        <button
          onClick={toggleSidebar}
          className="absolute top-4 right-4 lg:hidden p-2 bg-gray-200 text-gray-700 rounded-md hover:bg-gray-300"
        >
          <FaTimes />
        </button>

        {/* ✅ Logo (Top Left) */}
        <div className="flex flex-col items-start justify-center p-4 border-b border-gray-300">
          <img src={Logo} alt="Logo" className="h-12 mb-2" />
          <div className="bg-white p-2 rounded-lg border border-gray-300 w-full text-center hover:bg-gray-100">
            {userName}
          </div>
        </div>

        {/* ✅ Navigation Links */}
        <nav className="flex flex-col mt-4 space-y-1">
          {pages.map((page) => (
            <div
              key={page}
              onClick={() => {
                onPageSelect(page);
                setIsSidebarOpen(false); // Close sidebar on page select (small screens)
              }}
              className={`p-3 cursor-pointer rounded-lg flex items-center space-x-3 mx-4 ${
                selectedPage === page
                  ? "bg-blue-500 text-white"
                  : "text-gray-700 hover:bg-gray-200"
              }`}
            >
              <span className="text-lg">{pageIcons[page]}</span>
              <span>{page}</span>
            </div>
          ))}
        </nav>
      </aside>

      {/* ✅ Overlay for Small Screens */}
      {isSidebarOpen && (
        <div
          onClick={toggleSidebar}
          className="fixed inset-0 bg-black opacity-50 lg:hidden z-40"
        ></div>
      )}
    </>
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
