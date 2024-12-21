import { useState } from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import sidebarImage from "../assets/Images/Sidebar.png";
import Logo from "../assets/Images/Logo.png";
import GitIcon from "../assets/Images/GitIcon.png";
import BBIcon from "../assets/Images/BBIcon.png";
import AzureIcon from "../assets/Images/AzureIcon.png";
import GitlabIcon from "../assets/Images/GitlabIcon.png";
import SSOIcon from "../assets/Images/SSOIcon.png";

const LoginPage = ({ onLoginSuccess }) => {
  const [selectedOption, setSelectedOption] = useState("SAAS");
  const navigate = useNavigate();

  const saasOptions = [
    { text: "Sign in with GitHub", icon: GitIcon },
    { text: "Sign in with Bit Bucket", icon: BBIcon },
    { text: "Sign in with Azure DevOps", icon: AzureIcon },
    { text: "Sign in with GitLab", icon: GitlabIcon },
  ];

  const selfHostedOptions = [
    { text: "Self Hosted GitLab", icon: GitlabIcon },
    { text: "Sign in with SSO", icon: SSOIcon },
  ];

  const handleOptionClick = (optionText) => {
    alert(`${optionText}: Logged in successfully!`);
    onLoginSuccess();
    navigate("/dashboard");
  };

  return (
    <div className="flex h-screen bg-gray-100">
      
      <div className="w-[45%] hidden lg:block">
        <img src={sidebarImage} alt="Login Illustration" className="w-full h-full" />
      </div>

      
      <div className="w-full lg:w-[55%] flex justify-center items-center px-4">
        <div className="bg-white shadow-md rounded-lg p-8 w-full lg:w-[80%]">
          <div className="flex justify-center mb-6">
            <img src={Logo} alt="Logo" className="h-10" />
          </div>
          <h2 className="text-center text-3xl font-medium mb-6">Welcome to CodeAnt AI</h2>

          <div className="mb-4">
            <div className="flex justify-center space-x-0 h-14">
              <button
                onClick={() => setSelectedOption("SAAS")}
                className={`py-2 w-[50%] rounded-l-md font-medium ${
                  selectedOption === "SAAS" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                SAAS
              </button>
              <button
                onClick={() => setSelectedOption("Self-Hosted")}
                className={`py-2 w-[50%] rounded-r-md font-medium ${
                  selectedOption === "Self-Hosted" ? "bg-blue-500 text-white" : "bg-gray-200 text-gray-700"
                }`}
              >
                Self-Hosted
              </button>
            </div>
          </div>

          
          <div className="mt-6">
            {selectedOption === "SAAS" &&
              saasOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.text)}
                  className="flex items-center justify-center font-medium bg-white p-4 rounded-md shadow-md mb-3 w-full border border-gray-300 hover:bg-gray-100"
                >
                  <img src={option.icon} alt={option.text} className="h-6 w-6 mr-3" />
                  <span>{option.text}</span>
                </button>
              ))}
            {selectedOption === "Self-Hosted" &&
              selfHostedOptions.map((option, index) => (
                <button
                  key={index}
                  onClick={() => handleOptionClick(option.text)}
                  className="flex items-center bg-white justify-center font-medium p-4 rounded-md shadow-md mb-3 w-full border border-gray-300 hover:bg-gray-100"
                >
                  <img src={option.icon} alt={option.text} className="h-6 w-6 mr-3" />
                  <span>{option.text}</span>
                </button>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

LoginPage.propTypes = {
  onLoginSuccess: PropTypes.func.isRequired,
};

export default LoginPage;
