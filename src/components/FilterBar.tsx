import SelectFilter from "@/components/SelectFilter";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";

interface optionsItem {
  value: string;
  name: string;
}

interface FilterBarProps {
  priceList: optionsItem[];
  categories: optionsItem[];
  setSelectedPrice: (value: React.SetStateAction<string | null>) => void;
  setSelectedCategory: (value: React.SetStateAction<string | null>) => void;
  handleOpenNowChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  setOpenNow: Dispatch<SetStateAction<boolean>>;
  openNow: boolean;
  selectedPrice: string;
  selectedCategory: string;
}

const FilterBar: React.FC<FilterBarProps> = ({
  priceList,
  categories,
  setSelectedPrice,
  setSelectedCategory,
  handleOpenNowChange,
  setOpenNow,
  openNow,
  selectedPrice,
  selectedCategory,
}) => {
  const [isFilterActive, setIsFilterActive] = useState(false);

  useEffect(() => {
    const hasActiveFilter =
      selectedPrice !== "" || selectedCategory !== "" || openNow;
    setIsFilterActive(hasActiveFilter);
  }, [selectedPrice, selectedCategory, openNow]);

  return (
    <div className="px-10 py-4 border-gray-300 border-y">
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
          <SelectFilter
            value={selectedPrice}
            onValueChange={(value) => setSelectedPrice(value)}
            placeholder="Price"
            options={priceList}
          />
          <SelectFilter
            value={selectedCategory}
            onValueChange={(value) => setSelectedCategory(value)}
            placeholder="Categories"
            options={categories}
          />
        </div>
        <Button
          type="button"
          variant={"outline"}
          size={"sm"}
          disabled={!isFilterActive}
          // disabled
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
  );
};

export default FilterBar;
