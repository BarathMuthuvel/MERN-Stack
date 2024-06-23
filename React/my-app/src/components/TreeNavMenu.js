import React, { useState } from "react";

const MenuItem = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <li className="ml-4 mb-2">
      <div
        onClick={handleClick}
        className="cursor-pointer flex items-center space-x-2"
      >
        <span>{item.title}</span>
        {item.children && <span className="text-lg">{isOpen ? "-" : "+"}</span>}
      </div>
      {isOpen && item.children && (
        <ul className="pl-4 border-l border-gray-300">
          {item.children.map((child, index) => (
            <MenuItem key={index} item={child} />
          ))}
        </ul>
      )}
    </li>
  );
};

const Menu = ({ data }) => {
  return (
    <ul className="list-none p-0">
      {data.map((item, index) => (
        <MenuItem key={index} item={item} />
      ))}
    </ul>
  );
};

export default Menu;
