import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-emerald-600">
      <span> AvoTrader</span>
      <nav className="flex justify-around w-[60vw]">
        <Link
          className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl"
          to={"/dashboard"}
        >
          Home
        </Link>
        <Link
          className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl"
          to={"/activeOrders"}
        >
          Active Orders
        </Link>
        <Link
          className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl"
          to={"/customers"}
        >
          Customers
        </Link>
        <Link
          className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl"
          to={"/completedOrders"}
        >
          Completed Orders
        </Link>
        <Link
          className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl"
          to={"/batches"}
        >
          Batches
        </Link>
        <Link className="text-white font-medium hover:bg-orange-300 p-1 rounded-2xl">
          Link
        </Link>
      </nav>
    </div>
  );
}

export default Header;
