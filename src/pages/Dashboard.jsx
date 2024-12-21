import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/RepoCard"; // Ensure correct import path
import Logo from "../assets/Images/Logo.png";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSearch,
  faSyncAlt,
  faPlus,
  faMoon,
  faSun,
} from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("Repositories");
  const [darkMode, setDarkMode] = useState(false); // State for dark mode
  const userName = "Shruti"; // Replace with actual user data if dynamic

  const pages = [
    "Repositories",
    "AI Code Review",
    "Cloud Security",
    "How to Use",
    "Settings",
  ];

  const repositoryCards = [
    {
      title: "Design System",
      description: "React-based design system repository",
      tag: "Public",
      framework: "React",
      size: 7320,
      updatedTime: "1 day ago",
    },
    {
      title: "Analytics Dashboard",
      description: "Data visualization project",
      tag: "Private",
      framework: "Angular",
      size: 2048,
      updatedTime: "3 days ago",
    },
    {
      title: "E-commerce Backend",
      description: "Node.js backend for an e-commerce platform",
      tag: "Public",
      framework: "Node.js",
      size: 5120,
      updatedTime: "2 weeks ago",
    },
    {
      title: "Mobile App",
      description: "React Native application",
      tag: "Private",
      framework: "React Native",
      size: 8320,
      updatedTime: "1 month ago",
    },
    {
      title: "AI Research",
      description: "Machine learning experiments repository",
      tag: "Public",
      framework: "Python",
      size: 10240,
      updatedTime: "3 months ago",
    },
    {
      title: "Cloud Infrastructure",
      description: "Terraform and AWS configuration",
      tag: "Private",
      framework: "Terraform",
      size: 4096,
      updatedTime: "6 months ago",
    },
    // Add more card data as needed...
  ];

  return (
    <div
      className={`flex ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-black"
      }`}
    >
      <Sidebar
        userName={userName}
        pages={pages}
        selectedPage={selectedPage}
        onPageSelect={setSelectedPage}
        darkMode={darkMode} // Pass darkMode state
      />

      <div className="flex-1 p-4 border border-gray-300 rounded-lg shadow-md m-4">
        <div className="lg:hidden flex items-center justify-between mb-4">
          <img
            src={Logo}
            alt="Logo"
            className="h-12"
            style={{
              backgroundColor: darkMode ? "white" : "transparent", // Inline style as fallback
              padding: darkMode ? "8px" : "0",
              borderRadius: darkMode ? "8px" : "0",
            }}
          />
        </div>

        {/* Header */}
        <header className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold">{selectedPage}</h1>
            <p className="text-gray-500">33 total repositories</p>
            <div className="relative mt-4">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Repositories..."
                className={`w-full pl-8 pr-2 py-2 border rounded-md focus:outline-none ${
                  darkMode
                    ? "bg-gray-800 border-gray-600 text-white"
                    : "border-gray-300"
                }`}
              />
            </div>
          </div>

          <div className="flex gap-2">
            <button className="flex items-center gap-2 px-2 py-1 bg-gray-200 text-gray-800 rounded-md">
              <FontAwesomeIcon icon={faSyncAlt} />
              <span>Refresh All</span>
            </button>
            <button className="flex items-center gap-2 px-2 py-1 bg-blue-500 text-white rounded-md">
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Repository</span>
            </button>
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className={`flex items-center gap-2 px-6 py-4 rounded-full ${
                darkMode ? "bg-gray-800 text-white" : "bg-gray-200 text-black"
              }`}
            >
              <FontAwesomeIcon icon={darkMode ? faSun : faMoon} />
              
            </button>
          </div>
        </header>

        {/* Section for repository cards */}
        <section>
          <div>
            {selectedPage === "Repositories" &&
              repositoryCards.map((card, index) => (
                <Card
                  key={index}
                  title={card.title}
                  description={card.description}
                  tag={card.tag}
                  framework={card.framework}
                  size={card.size}
                  updatedTime={card.updatedTime}
                  darkMode={darkMode} // Optional, if Card needs dark mode
                />
              ))}
          </div>
          {selectedPage !== "Repositories" && (
            <p className="text-center h-screen">
              Content for {selectedPage} will be shown here.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
