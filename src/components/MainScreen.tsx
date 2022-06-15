import React from "react";
import Nav from "./Nav";
import Customers from "../pages/customers";
import Order from "../pages/Order";
import Employees from "../pages/Employees";
const MainScreen: React.FC = () => {
  return (
    <div className="mainscreen">
      <Nav />
      <Customers />
    </div>
  );
};
export default MainScreen;
