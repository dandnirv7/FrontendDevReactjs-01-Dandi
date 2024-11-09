import { Button } from "@/components/ui/button";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import data from "@/data/data.json";

import RestaurantList from "@/components/RestaurantList";
import { Restaurant } from "@/interfaces";

const Home = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openNow, setOpenNow] = useState(false);

  const categories = [
    { name: "Italian", value: "Italian" },
    { name: "European", value: "European" },
    { name: "Sushi", value: "Sushi" },
    { name: "Japanese", value: "Japanese" },
    { name: "French", value: "French" },
    { name: "Bistro", value: "Bistro" },
    { name: "Tacos", value: "Tacos" },
    { name: "Mexican", value: "Mexican" },
    { name: "Pasta", value: "Pasta" },
    { name: "American", value: "American" },
    { name: "Indian", value: "Indian" },
    { name: "Spicy", value: "Spicy" },
    { name: "Dim Sum", value: "Dim Sum" },
    { name: "Chinese", value: "Chinese" },
  ];

  useEffect(() => {
    const filterRestaurants = () => {
      let filtered = data.restaurants;

      if (selectedPrice) {
        filtered = filtered.filter(
          (restaurant) => restaurant.price_range === selectedPrice
        );
      }

      if (selectedCategory) {
        filtered = filtered.filter((restaurant) =>
          restaurant.categories.includes(selectedCategory)
        );
      }

      if (openNow) {
        filtered = filtered.filter((restaurant) => restaurant.open_now);
      }

      setFilteredRestaurants(filtered);
      setRestaurants(filtered.slice(0, 8));
      setHasMore(filtered.length > 8);
    };
    filterRestaurants();
  }, [selectedPrice, selectedCategory, openNow]);

  const loadMoreRestaurants = () => {
    const nextRestaurants = filteredRestaurants.slice(page * 8, (page + 1) * 8);
    setRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      ...nextRestaurants,
    ]);
    setPage((prevPage) => prevPage + 1);
    setHasMore(nextRestaurants.length > 0);
  };

  const handleOpenNowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenNow(e.target.checked);
  };

  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="w-2/3 px-10 space-y-4">
        <h1 className="text-6xl">Restaurants</h1>
        <p className="text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, provident.
          Rem aperiam placeat id suscipit numquam impedit, architecto eum saepe.
        </p>
      </div>

      <div className="px-10 py-4 border-gray-300 border-y ">
        <form className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center gap-5">
            <label htmlFor="filter" className="capitalize">
              Filter By:
            </label>

            <div className="flex items-center justify-between h-10 gap-2 py-2 text-sm bg-white border-b border-neutral-200 ring-offset-white placeholder:text-neutral-500 focus:outline-none focus:ring-2 focus:ring-neutral-950 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50">
              <input
                type="radio"
                id="terms"
                className="rounded-full size-3"
                checked={openNow}
                onChange={(e) => handleOpenNowChange(e)}
              />

              <label
                htmlFor="terms"
                className="text-sm leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Open Now
              </label>
            </div>

            <Select
              value={selectedPrice || ""}
              onValueChange={(value) => setSelectedPrice(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Price" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="$">$</SelectItem>
                  <SelectItem value="$$">$$</SelectItem>
                  <SelectItem value="$$$">$$$</SelectItem>
                  <SelectItem value="$$$$">$$$$</SelectItem>
                  <SelectItem value="$$$$$">$$$$$</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>

            <Select
              value={selectedCategory || ""}
              onValueChange={(value) => setSelectedCategory(value)}
            >
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {categories.map((category) => (
                    <SelectItem value={category.value} key={category.value}>
                      {category.name}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>

          <Button
            type="button"
            variant={"outline"}
            size={"sm"}
            onClick={() => {
              setSelectedPrice(null);
              setSelectedCategory(null);
              setOpenNow(false);
            }}
            className="px-10 uppercase"
          >
            Clear All
          </Button>
        </form>
      </div>

      <div className="flex flex-col gap-8 px-10">
        <h1 className="text-3xl capitalize">All Restaurant</h1>

        <RestaurantList restaurants={restaurants} />
        {hasMore && (
          <Button
            onClick={loadMoreRestaurants}
            variant={"outline"}
            className="w-1/4 mx-auto text-sm uppercase"
          >
            Load More
          </Button>
        )}
      </div>
    </div>
  );
};

export default Home;
