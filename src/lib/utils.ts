import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { Restaurant } from "@/interfaces";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

type Category = {
  name: string;
  value: string;
};

export const getUniqueCategories = <T>(data: T[], key: keyof T): Category[] => {
  return [...new Set(data.flatMap((item) => item[key] as string[]))]
    .sort()
    .map((category) => ({
      name: category,
      value: category,
    }));
};

export const getRestaurantById = (
  restaurantId: string = "",
  data: Restaurant[]
): Restaurant[] => {
  return data.filter(
    (restaurant) => restaurant.id.toLowerCase() === restaurantId.toLowerCase()
  );
};
