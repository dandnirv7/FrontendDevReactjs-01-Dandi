import { useEffect, useState } from "react";
import data from "@/data/data.json";
import { Restaurant } from "@/interfaces";

const useRestaurants = () => {
  const [restaurants, setRestaurants] = useState<Restaurant[]>([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState<Restaurant[]>(
    []
  );
  const [page, setPage] = useState(1);
  const [hasMore, setHasMore] = useState(true);

  const [selectedPrice, setSelectedPrice] = useState<string | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [openNow, setOpenNow] = useState(false);

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

      const initialRestaurants = filtered.slice(0, 8);
      setRestaurants(initialRestaurants);

      setHasMore(filtered.length > 8);
    };

    filterRestaurants();
  }, [selectedPrice, selectedCategory, openNow]);

  const loadMoreRestaurants = () => {
    const nextRestaurants = filteredRestaurants.slice(page * 8, (page + 1) * 8);

    if (nextRestaurants.length === 0) {
      setHasMore(false);
      return;
    }

    setRestaurants((prevRestaurants) => [
      ...prevRestaurants,
      ...nextRestaurants,
    ]);

    setPage((prevPage) => prevPage + 1);

    setHasMore(filteredRestaurants.length > (page + 1) * 8);
  };

  const handleOpenNowChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setOpenNow(e.target.checked);
  };

  return {
    restaurants,
    hasMore,
    setSelectedPrice,
    setSelectedCategory,
    setOpenNow,
    loadMoreRestaurants,
    selectedPrice,
    selectedCategory,
    openNow,
    handleOpenNowChange,
  };
};

export default useRestaurants;
