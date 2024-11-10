import { Button } from "@/components/ui/button";
import FilterBar from "@/components/FilterBar";
import RestaurantList from "@/components/RestaurantList";
import useRestaurants from "@/hooks/useRestaurants";
import data from "@/data/data.json";
import { getUniqueCategories } from "@/lib/utils";

interface optionsItem {
  value: string;
  name: string;
}

const Home = () => {
  const {
    setSelectedPrice,
    setSelectedCategory,
    handleOpenNowChange,
    setOpenNow,
    openNow,
    selectedPrice,
    selectedCategory,
    restaurants,
    hasMore,
    loadMoreRestaurants,
  } = useRestaurants();

  const categories: optionsItem[] = getUniqueCategories(
    data.restaurants,
    "categories"
  );
  const priceList: optionsItem[] = getUniqueCategories(
    data.restaurants,
    "price_range"
  );

  return (
    <div className="flex flex-col gap-10 py-10">
      <div className="w-2/3 px-10 space-y-4">
        <h1 className="text-6xl">Restaurants</h1>
        <p className="text-xl text-gray-500">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. A, provident.
          Rem aperiam placeat id suscipit numquam impedit, architecto eum saepe.
        </p>
      </div>
      <FilterBar
        categories={categories}
        priceList={priceList}
        setSelectedPrice={setSelectedPrice}
        setSelectedCategory={setSelectedCategory}
        handleOpenNowChange={handleOpenNowChange}
        setOpenNow={setOpenNow}
        openNow={openNow}
        selectedPrice={selectedPrice || ""}
        selectedCategory={selectedCategory || ""}
      />
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
