import { useState } from "react";
import Sidebar from "../components/Sidebar";
import Card from "../components/RepoCard"; // Ensure correct import path
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faSyncAlt, faPlus } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  const [selectedPage, setSelectedPage] = useState("Repositories");
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
  ];

  return (
    <div className="flex h-screen">
      <Sidebar
        userName={userName}
        pages={pages}
        selectedPage={selectedPage}
        onPageSelect={setSelectedPage}
      />

      <div className="flex-1 p-4 bg-gray-50 border border-gray-300 rounded-lg shadow-md m-4 mb-0 overflow-y-hidden">
        <header className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-semibold">{selectedPage}</h1>
            <p className="text-gray-600 mt-1">33 total repositories</p>
            <div className="mt-4 relative">
              <FontAwesomeIcon
                icon={faSearch}
                className="absolute left-2 top-3 text-gray-400"
              />
              <input
                type="text"
                placeholder="Search Repositories..."
                className="border border-gray-300 rounded-md p-2 pl-8 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="bg-gray-200 text-gray-700 px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-gray-300">
              <FontAwesomeIcon icon={faSyncAlt} />
              <span>Refresh All</span>
            </button>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-lg flex items-center space-x-2 hover:bg-blue-600">
              <FontAwesomeIcon icon={faPlus} />
              <span>Add Repository</span>
            </button>
          </div>
        </header>

        <section className="h-[calc(100%-120px)] overflow-y-auto">
          <div className="flex flex-col ">
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
                />
              ))}
          </div>
          {selectedPage !== "Repositories" && (
            <p className="text-gray-600 text-center">
              Content for {selectedPage} will be shown here.
            </p>
          )}
        </section>
      </div>
    </div>
  );
};

export default Dashboard;
