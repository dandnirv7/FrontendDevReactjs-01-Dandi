import React from "react";
import RestaurantItem from "./RestaurantItem";
import { Restaurant } from "@/interfaces";

interface RestaurantListProps {
  restaurants: Restaurant[];
}

const RestaurantList: React.FC<RestaurantListProps> = ({ restaurants }) => {
  return (
    <div className="grid grid-cols-12 restaurant-list gap-x-6 gap-y-20">
      {restaurants.map((restaurant) => (
        <RestaurantItem key={restaurant.id} restaurant={restaurant} />
      ))}
    </div>
  );
};

export default RestaurantList;
