import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import DataTable from "react-data-table-component";
import { Link } from "react-router-dom";

function ActiveOrders() {
  const columns = [
    {
      name: "Order",
      selector: (row) => row.order,
    },
    {
      name: "Customer",
      selector: (row) => row.customer,
    },
    {
      name: "Bags",
      selector: (row) => row.bags,
    },
    {
      name: "Amount",
      selector: (row) => row.amount,
    },
    {
      name: "Batch",
      selector: (row) => row.batch,
    },
    {
      name: "Delivery Status",
      selector: (row) => row.deliveryStatus,
    },
    {
      name: "Payment Status",
      selector: (row) => row.paymentStatus,
    },
    {
      name: "Method",
      selector: (row) => row.method,
    },
  ];
  const dataB = [
    {
      id: 3,
      order: 7,
      customer: "Stevie",
      amount: 1200,
      bags: 2,
    },
    {
      id: 2,
      order: 8,
      customer: "Jamie",
      amount: 600,
      bags: 2,
    },
    {
      id: 1,
      order: 2,
      customer: "Charles",
      amount: 1800,
      bags: 3,
      batch: "24-OCT-23/1",
      deliveryStatus: "Complete",
      paymentStatus: "Complete",
      method: "EFT",
    },
  ];
  return (
    <>
      <body className="flex w-screen">
        <Aside />
        <section className="flex flex-col">
          <Header />
          {/* Active Order Table */}
          <Link to={"/create"}>
            <button className="m-10 bg-green-950 w-fit text-white p-2 rounded-xl">
              Create New Order
            </button>
          </Link>

          <div className=" w-[85vw] border-2"></div>
        </section>
      </body>
    </>
  );
}

export default ActiveOrders;
