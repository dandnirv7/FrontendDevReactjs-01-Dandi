import Review from "@/components/Review";
import data from "@/data/data.json";
import React from "react";
import { GrStar, GrStarOutline } from "react-icons/gr";
import Rating from "react-rating";
import { Link, Navigate, useParams } from "react-router-dom";

import SingleMap from "@/components/SingleMap";
import MenuList from "@/components/MenuList";
import { getRestaurantById } from "@/lib/utils";

export const RestaurantDetail: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurantData = getRestaurantById(restaurantId, data.restaurants);

  if (restaurantData.length === 0) {
    return Navigate({ to: "/404", replace: true });
  }

  return (
    <div className="flex flex-col gap-4 px-20 py-10">
      <Link to="/home" className="text-[#002b56]">
        Back to Home
      </Link>
      {restaurantData.map((restaurant) => (
        <div key={restaurant.id}>
          <img
            src={restaurant.photos[0]}
            alt="restaurant-image"
            loading="lazy"
            className="object-cover w-3/4 h-full bg-center"
          />
          <div className="flex flex-row items-center justify-start gap-2 mt-4">
            <h1 className="text-4xl font-semibold capitalize">
              {restaurant.restaurant_name}
            </h1>
            <span className="text-4xl">&bull;</span>
            <Rating
              initialRating={restaurant.rating}
              readonly
              fullSymbol={<GrStar className="text-[#002b56] size-8" />}
              emptySymbol={<GrStarOutline className="text-[#002b56] size-8" />}
            />
          </div>

          <div>
            <MenuList title="List Food" items={restaurant.menu.food} />
            <MenuList title="List Drink" items={restaurant.menu.drinks} />
          </div>

          <div className="w-1/2 my-5">
            <SingleMap
              latitude={restaurant.location.latitude}
              longitude={restaurant.location.longitude}
              address={restaurant.location.address}
            />
          </div>

          <Review reviews={restaurant.reviews} />
        </div>
      ))}
    </div>
  );
};
