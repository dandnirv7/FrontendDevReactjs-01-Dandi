import React from "react";
import { Link } from "react-router-dom";
import { Restaurant } from "@/interfaces";
import Rating from "react-rating";
import { GrStar, GrStarOutline } from "react-icons/gr";
import { Button } from "@/components/ui/button";

interface RestaurantItemProps {
  restaurant: Restaurant;
}

const RestaurantItem: React.FC<RestaurantItemProps> = ({ restaurant }) => {
  return (
    <div className="flex flex-row items-center justify-between col-span-3">
      <div className="flex flex-col w-full gap-5">
        <img
          src={restaurant.photos[0]}
          alt={restaurant.restaurant_name}
          className="bg-gray-100 aspect-[3/2]"
          loading="lazy"
        />
        <div className="flex flex-col gap-1">
          <h2 className="text-xl">{restaurant.restaurant_name}</h2>
          <Rating
            initialRating={restaurant.rating}
            readonly
            fullSymbol={<GrStar className="text-[#002b56] size-5" />}
            emptySymbol={<GrStarOutline className="text-[#002b56] size-5" />}
          />

          <div className="flex flex-row items-center justify-between">
            <div>
              <span className="text-xs text-gray-500 uppercase">
                {restaurant.cuisine} &bull; {restaurant.price_range}
              </span>
            </div>
            <span
              className={`relative before:content-[''] before:h-2 before:w-2 ${
                restaurant.open_now
                  ? "before:bg-green-500"
                  : "before:bg-red-500"
              } before:block before:absolute before:-left-3 before:rounded-full before:bottom-1.5 uppercase text-xs`}
            >
              {restaurant.open_now ? "Open Now" : "Closed"}
            </span>
          </div>
        </div>
        <Link to={`/restaurant/${restaurant.id}`}>
          <Button className="bg-[#002b56] rounded-none w-full">
            Learn More
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default RestaurantItem;
