# Restaurant Listings App

This is a simple **React.js** application that displays a list of restaurants with filtering options and a detailed restaurant view. The data is mock data stored locally in JSON format, as there was no suitable API available for the MVP requirements.

## Features

### Main Page:

- **Filter Navigation**: Filters for price, open status, and categories/cuisines.
- **Open Now Filter**: Filters restaurants that are currently open (client-side filtering).
- **Price Filter**: Filters restaurants based on price range (client-side filtering).
- **Categories/Cuisines Filter**: Filters restaurants based on cuisine/category (server-side search).
- **Restaurant Items**: Displays a list of restaurants with the following details:
  - **Image**: Displayed from the `photos` array (first item).
  - **Cuisine / Categories**: Displayed from the `categories` array (first item).
  - **Rating**: Restaurant rating.
  - **Price Range**: Displayed as a price range (based on the `price` field).
  - **Open / Closed Status**: Indicates whether the restaurant is currently open or closed.
  - **Restaurant Name**: The name of the restaurant.
  - **Learn More**: Navigation to the restaurant’s detail view.

### Detail View:

- **Restaurant Name & Rating**: Displays the name and rating of the selected restaurant.
- **Map** (Optional): You can include a map (optional feature) for restaurant location.
- **Review Items**: Displays reviews for the restaurant with the following information:
  - **Image**: Reviewer's profile picture.
  - **Name**: Reviewer's name.
  - **Rating**: Review rating.
  - **Text**: Review text.

## Technologies Used

- **React.js** (Frontend)
- **React Router DOM** (Routing between pages)
- **Zod** (Form Validation)
- **TypeScript** (Static Typing)
- **Tailwind CSS** (Styling)
- **Mock JSON Data** (Instead of API)

## Prerequisites

Before you start, ensure you have the following installed:

- **Node.js** (Version 16.x or higher)
- **npm** (Node Package Manager) or **yarn** (optional)

To check the installed versions:

```bash
node -v
npm -v
```

For yarn, use:

```bash
yarn -v
```

# Project Setup

## 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/dandnirv/FrontendDevReactjs-01-Dandi.git
cd FronendDevReactjs-01-Dandi
```

## 2. Install Dependencies

You can use either npm or yarn to install the dependencies.

Using npm:

```bash
npm install
```

Usin yarn:

```bash
yarn install
```

## 3. Start the Development Server

Using npm:

```bash
npm run dev
```

Using yarn:

```bash
yarn dev
```

This will start the development server and open the application in your default browser at http://localhost:5173.

## Login Credentials

The application uses a simple dummy login system to access the restaurant's management dashboard. Use the following credentials to log in:

- **Username**: `admin`
- **Password**: `1234`

### How it works:

- If you enter the **correct credentials**, you will be redirected to the restaurant dashboard.
- If the **credentials are incorrect**, an error message will be displayed, notifying you that the login attempt has failed.

You can log in using the provided credentials to gain access to the restaurant management features, including viewing the menu, adding new restaurants, managing orders, and more.

# Data Structure (Mock JSON)

Here’s a sample structure of the mock JSON data used in the application:

### restaurants.json

```json
[
  {
    "id": 1,
    "name": "Sushi Bar",
    "rating": 4.5,
    "price": "$$",
    "openNow": true,
    "categories": ["Sushi", "Japanese"],
    "photos": [
      "https://example.com/photo1.jpg",
      "https://example.com/photo2.jpg"
    ],
    "reviews": [
      {
        "name": "John Doe",
        "rating": 5,
        "text": "Amazing sushi! Fresh and flavorful.",
        "image": "https://example.com/reviewer1.jpg"
      },
      {
        "name": "Jane Smith",
        "rating": 4,
        "text": "Good, but a bit expensive.",
        "image": "https://example.com/reviewer2.jpg"
      }
    ],
    "location": {
      "latitude": 40.7128,
      "longitude": -74.006
    }
  },
  {
    "id": 2,
    "name": "Pasta House",
    "rating": 4.0,
    "price": "$",
    "openNow": false,
    "categories": ["Italian", "Pasta"],
    "photos": [
      "https://example.com/photo3.jpg",
      "https://example.com/photo4.jpg"
    ],
    "reviews": [
      {
        "name": "Sam Green",
        "rating": 4,
        "text": "Great pasta dishes, but service was slow.",
        "image": "https://example.com/reviewer3.jpg"
      }
    ],
    "location": {
      "latitude": 34.0522,
      "longitude": -118.2437
    }
  }
]
```

## Key Fields

The following are the key fields used in the restaurant data:

- **`id`**: Unique identifier for each restaurant.
- **`name`**: Name of the restaurant.
- **`rating`**: Rating of the restaurant (out of 5).
- **`price`**: Price range of the restaurant. It can be represented using symbols like:
  - `$` (cheap)
  - `$$` (moderate)
  - `$$$` (expensive)
  - `$$$$` (luxury)
- **`openNow`**: A boolean value indicating whether the restaurant is open right now. `true` means open, and `false` means closed.
- **`categories`**: An array of cuisine categories for the restaurant (e.g., `["Sushi", "Japanese", "Seafood"]`).
- **`photos`**: An array of image URLs representing the restaurant. The first image in this array is typically used as the restaurant's primary photo.
- **`reviews`**: An array of reviews, each containing the following information:
  - **`name`**: Reviewer's name.
  - **`rating`**: Rating given by the reviewer (out of 5).
  - **`text`**: The content of the review.
  - **`image`**: URL to the reviewer's profile image or photo.
- **`location`**: Coordinates (latitude and longitude) for the restaurant's physical location. The location is stored as an object with the following properties:
  - **`latitude`**: Latitude of the restaurant.
  - **`longitude`**: Longitude of the restaurant.

## Additional Information

- **React with TypeScript**: The application is built using **React** for the front-end and **TypeScript** for type safety. TypeScript helps ensure that the app has strong type checking, making the development process more reliable and reducing potential errors.

- **Tailwind CSS**: **Tailwind CSS** is used for styling the components. It's a utility-first CSS framework that allows you to build custom designs directly in the markup, making the app highly customizable and easy to maintain.

- **React Router DOM**: **React Router DOM** is used for handling navigation between different views in the app. It is used to navigate between the main restaurant listing page and the individual restaurant detail page. This allows users to interact with the app and explore different restaurant details seamlessly.

- **Mock JSON Data**: Since there is no public API available that fits the needs of this MVP, **mock JSON data** is used to populate the restaurant listings, reviews, and other necessary details. This mock data is stored locally in the project and is used to simulate the real data interactions that would be present if an actual API was available.

## License

This project is open-source and available under the [MIT License](https://opensource.org/licenses/MIT).

## Author

**dandnirv7** - [dandnirv7's GitHub Profile](https://github.com/dandnirv7)
