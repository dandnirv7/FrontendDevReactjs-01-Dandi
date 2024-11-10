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
  menu: Menu;
}

export interface Location {
  address: string;
  latitude: number;
  longitude: number;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  profile_path: string;
  pictures: string[];
}

export interface Menu {
  food: MenuItem[];
  drinks: MenuItem[];
}

export interface MenuItem {
  name: string;
  description: string;
  price: string;
}
