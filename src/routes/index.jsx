import { Routes, Route } from "react-router-dom";
import HomeLayout from "../layouts/home";
import Home from "../pages/home";

const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<HomeLayout />}>
        <Route index element={<Home />} />
      </Route>
    </Routes>
  );
};

export default Router;
