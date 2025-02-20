import { useState } from "react";
import { FaHome, FaInfoCircle, FaPhone } from "react-icons/fa";
import { SiCoursera } from "react-icons/si";
import Card from "./Card";
import About from "./About";
import Contact from "./Contact";

const tabs = [
  {
    id: 1,
    title: "Home",
    icon: <FaHome size={20} />,
    content: (
      <div className="flex flex-wrap gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://imgs.search.brave.com/nLfAHG-Ww0UC4qE-cjMvQ681Zm353qKbtXLXEVA8EzU/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9saWNr/ZC5jby93cC1jb250/ZW50L3VwbG9hZHMv/MjAyMi8xMS9DYW52/YS1Zb3VUdWJlLVRo/dW1ibmFpbC1jcmVh/dG9yLmpwZWc"
          />
        ))}
      </div>
    ),
  },
  {
    id: 2,
    title: "About",
    icon: <FaInfoCircle size={20} />,
    content: <About />,
  },
  {
    id: 3,
    title: "Courses",
    icon: <SiCoursera size={20} />,
    content: (
      <div className="flex flex-wrap gap-8">
        {Array.from({ length: 6 }).map((_, index) => (
          <Card
            key={index}
            title="Amazing Card"
            description="This is a cool-looking card component using React and Tailwind CSS."
            image="https://imgs.search.brave.com/y7R1Y8w9r7EYaetG5zoyPkHemNlx9b2uwb9mXSTTEWA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/ZnJlZS1waG90by9i/ZWF1dGlmdWwtc2Nl/bmVyeS1yb2NrLWZv/cm1hdGlvbnMtYnkt/c2VhLXF1ZWVucy1i/YXRoLWthdWFpLWhh/d2FpaS1zdW5zZXRf/MTgxNjI0LTM2ODU3/LmpwZz9zZW10PWFp/c19oeWJyaWQ"
          />
        ))}
      </div>
    ),
  },
  {
    id: 4,
    title: "Contact",
    icon: <FaPhone size={20} />,
    content: <Contact />,
  },
];

const Tabs = () => {
  const [isActive, setActive] = useState(tabs[0].id);

  return (
    <div className="p-4 mt-8 w-full  mx-auto ">

      <div className="flex ">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`flex-1 text-center py-2 px-4 flex flex-col items-center gap-1 transition-all duration-300 
              ${
                isActive === tab.id
                  ? "bg-black text-white font-semibold rounded-t-lg"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {tab.icon}
            <span>{tab.title}</span>
          </button>
        ))}
      </div>

     <div className="w-full h-full p-4 bg-gray-200 rounded-b-lg b  flex gap-1">
{tabs.find(tab=>tab.id===isActive)?.content}

     </div>
    </div>
  );
};

export default Tabs;
