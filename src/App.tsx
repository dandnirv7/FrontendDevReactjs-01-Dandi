import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Login from "@/components/Login";
import ProtectedRoute from "@/components/ProtectedRoute";
import Home from "@/pages/Home";
import { RestaurantDetail } from "./pages/Restaurant";
import NotFound from "./pages/NotFound";

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Router>
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route
          path="/"
          element={<Login setIsAuthenticated={setIsAuthenticated} />}
        />
        <Route
          path="/home"
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="restaurant" element={<Outlet></Outlet>}>
          <Route index element={<NotFound />} />
          <Route path=":restaurantId" element={<RestaurantDetail />}></Route>
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
