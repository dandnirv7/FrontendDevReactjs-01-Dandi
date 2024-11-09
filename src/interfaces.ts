export interface Restaurant {
  restaurant_name: string;
  rating: number;
  price_range: string;
  open_now: boolean;
  cuisine: string;
  categories: string[];
  photos: string[];
  id: string;
  location: Location;
  reviews: Review[];
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface Review {
  name: string;
  rating: number;
  text: string;
}
