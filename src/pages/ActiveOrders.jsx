import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import ActiveOrderCard from "../components/ActiveOrderCard";

function ActiveOrders() {
  return (
    <>
      <body className="flex w-screen">
        <Aside />
        <section className="flex flex-col">
          <Header />
          {/* Active Order Header Bar */}
          <div className="flex justify-around m-5 ">
            <span>Active Orders</span>
            <div>
              <span>Find by Name</span>
              <input className="border-2 border-slate-950" type="text" />
              <button className="border-2 border-slate-950">Search</button>
              <button className="border-2 border-slate-950">clear</button>
            </div>
          </div>
          {/* Order Table Here */}
          <div className="flex m-10 w-[75vw] justify-between ">
            <span>Order</span>
            <span>Customer</span>
            <span>Ammount</span>
            <span>Bags</span>
            <span>Batch</span>
            <span>Delevery Status</span>
            <span>Payment Status</span>
            <span>Method</span>
          </div>
          <ActiveOrderCard />
        </section>
      </body>
    </>
  );
}

export default ActiveOrders;
