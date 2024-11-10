import React from "react";

interface MenuItem {
  name: string;
  description: string;
  price: string;
}

interface MenuListProps {
  title: string;
  items: MenuItem[];
}

const MenuList: React.FC<MenuListProps> = ({ title, items }) => {
  return (
    <div>
      <h1 className="mt-6 text-2xl font-semibold">{title}</h1>
      <ul className="pl-6 list-disc">
        {items.map((item) => (
          <li key={item.name} className="mt-2">
            <strong>{item.name}</strong>: {item.description} -{" "}
            <span className="font-bold">{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuList;
