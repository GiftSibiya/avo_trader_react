import React from "react";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="flex items-center justify-between w-full h-16 bg-slate-200">
      <span> AvoTrader</span>
      <nav className="flex justify-around w-[60vw]">
        <Link to={"/dashboard"}>Home</Link>
        <Link to={"/activeOrders"}>Active Orders</Link>
        <Link to={"/customers"}>Customers</Link>
        <Link to={"/completedOrders"}>Completed Orders</Link>
        <Link to={"/batches"}>Batches</Link>
        <Link>Link</Link>
      </nav>
    </div>
  );
}

export default Header;
