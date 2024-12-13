import React, { useEffect, useState } from "react";
import img3 from "../assets/menubackground.png";
import img4 from "../assets/drinkmenuimg.png";
import img5 from "../assets/drinkmenuimg2.png";
import { additem, getitem } from "../../Services/Allapi";

function Menu({ selectedMenu }) {
  const [menuItems, setMenuItems] = useState([]);
  const [newMenuItem, setNewMenuItem] = useState({
    itemname: "",
    description: "",
    price: "",
    category: selectedMenu, // Use selectedMenu as the category
  });

  const addmenuitems = async () => {
    try {
      const r = await additem({ ...newMenuItem, category: selectedMenu });
      console.log("Added item response:", r);
      setNewMenuItem({
        itemname: "",
        description: "",
        price: "",
        category: selectedMenu,
      });
      fetchMenuItems(); // Refresh menu items
    } catch (e) {
      console.error("Error adding menu item:", e);
    }
  };

  const fetchMenuItems = async () => {
    try {
      if (!selectedMenu) {
        console.log("No selected menu category");
        return;
      }
  
      console.log("Fetching items for category:", selectedMenu);
  
      // Now this should directly return the data array
      const items = await getitem({ category: selectedMenu });
      
      console.log("Fetched Items:", items);
      
      // Ensure items is an array
      setMenuItems(Array.isArray(items) ? items : []);
    } catch (e) {
      console.error("Error fetching menu items:", e);
      setMenuItems([]);
    }
  };
  useEffect(() => {
    console.log("Component mounted or selectedMenu changed");
    console.log("Current selectedMenu:", selectedMenu);
    
    if (selectedMenu) {
      fetchMenuItems();
    } else {
      console.warn("No selected menu category to fetch items for");
    }
  }, [selectedMenu]);
  return (
    <div>
      <div
        className="relative bg-black text-white py-16 px-6"
        style={{
          backgroundImage: `url(${img3})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black opacity-70"></div>
        <div className="relative z-10 max-w-7xl mx-auto">
          <h2 className="text-center text-4xl font-bold text-red-600 uppercase mb-8">
            {selectedMenu} Menu
          </h2>
          <div className="border border-gray-700 p-6 relative">
            <img
              src={img4}
              alt="Image in top left"
              className="absolute bottom-32 -left-20 w-36 rounded-md shadow-lg"
            />
            <img
              src={img5}
              alt="Image in bottom right"
              className="absolute top-3 -right-20 w-36 rounded-md shadow-lg"
            />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {menuItems.length > 0 ? (
                menuItems.map((item) => (
                  <div key={item._id}>
                    <div className="flex justify-between items-start border-b border-gray-600 pb-4">
                      <div>
                        <h3 className="text-xl font-bold">{item.itemname}</h3>
                        <p className="text-sm text-gray-400">
                          {item.description}
                        </p>
                      </div>
                      <span className="text-xl text-white">${item.price}</span>
                    </div>
                  </div>
                ))
              ) : (
                <p>No items available for this category</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
