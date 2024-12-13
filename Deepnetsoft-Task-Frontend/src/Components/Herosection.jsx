import React, { useState, useEffect } from "react";
import img from "../assets/herosection.jpg";
import { addmenuname, getmenuname } from "../../Services/Allapi";

function HeroSection({ onMenuSelect }) {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [menuNames, setMenuNames] = useState([]);
  const [menuname, setMenuname] = useState({ name: "" });

  // Add menu API call
  const handleAddMenuname = async () => {
    try {
      const response = await addmenuname(menuname); // Add menu to the API
      console.log("Added menu response:", response);
      setMenuname({ name: "" }); // Clear the input field
      handlegetmenuname(); // Refresh menu names
      setIsModalOpen(false); // Close modal
    } catch (e) {
      console.error("Error in adding menu:", e);
    }
  };

  // Get menu names API call
  const handlegetmenuname = async () => {
    try {
      const res = await getmenuname();
      setMenuNames(res.data || []); // Assuming API returns an array of menu objects
    } catch (e) {
      console.error("Error fetching menus:", e);
    }
  };

  // Fetch menu names on component mount
  useEffect(() => {
    handlegetmenuname();
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <div
        className="font-sans p-8 relative"
        style={{
          backgroundImage: `url(${img})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        {/* Overlay for dark background */}
        <div className="absolute inset-0 bg-black opacity-50"></div>

        {/* Content */}
        <div className="relative text-center max-w-2xl max-md:max-w-md mx-auto">
          <h2 className="text-white md:text-4xl text-3xl font-extrabold mb-4">
            Menu
          </h2>
          <p className="text-white mt-6 text-sm leading-relaxed">
            Please take a look at our menu featuring food, drinks, and brunch.
          </p>
          <div className="mt-12 flex gap-x-6 gap-y-4 justify-center flex-wrap">
            <button
              type="button"
              className="bg-black hover:bg-blue-600 text-white border border-blue-600 transition-all font-bold text-sm rounded px-6 py-3"
              onClick={() => setIsModalOpen(true)}
            >
              Add Menu
            </button>
            {menuNames.map((menu, index) => (
              <button
                key={index}
                className="bg-black hover:bg-blue-600 text-white border border-blue-600 transition-all font-bold text-sm rounded px-6 py-3"
                onClick={() => onMenuSelect(menu.name)} // Pass menu name as category
              >
                {menu.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white rounded-lg shadow-lg p-6 w-96"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-lg font-bold mb-4">Add Menu</h3>
            <input
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded mb-4"
              placeholder="Enter menu name"
              value={menuname.name}
              onChange={(e) =>
                setMenuname({ ...menuname, name: e.target.value })
              }
            />
            <button
              className="bg-black text-white px-4 py-2 rounded"
              onClick={handleAddMenuname}
            >
              Add Menu
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HeroSection;
