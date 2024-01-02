import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";

function Dashboard() {
  return (
    <>
      <body className="flex w-screen">
        <Aside />
        <section className="flex flex-col">
          <Header />

          <section className="flex flex-col items-center h-full w-full ">
            <div className=" m-10 w-[75vw] h-[150px] rounded-lg bg-green-100">
              Heads up
            </div>
            <div className="flex items-center justify-between w-[75vw] h-[400px]  border-2 border-white">
              {/* Bags Box */}
              <div className="flex flex-col justify-center  gap-2 border-2 w-[300px] h-[380px]">
                <div className="flex justify-between mx-2.5">
                  <span> Bags Delivered</span>
                  <span>16</span>
                </div>
                <div className="flex justify-between mx-2.5">
                  <span>Bags Pending Delivery</span>
                  <span>0</span>
                </div>
                <div className="flex justify-between mx-2.5">
                  <span>Bags Paid</span>
                  <span>15</span>
                </div>
                <div className="flex justify-between mx-2.5">
                  <span>bags Pending Payment</span>
                  <span>1</span>
                </div>
                <div className="flex justify-between mx-2.5">
                  <span>Available Stock Remaining</span>
                  <span>9</span>
                </div>
              </div>
              {/* Transactions Box */}
              <div className="border-2 w-[380px] h-[380px]">
                <div className="flex flex-col justify-center  gap-2 border-2 h-[380px]">
                  <div className="flex justify-between mx-2.5">
                    <span> Total Amount</span>
                    <span>R 1440.00</span>
                  </div>
                  <div className="flex justify-between mx-2.5">
                    <span>Total Recieved</span>
                    <span>R 1400.00</span>
                  </div>
                  <div className="flex justify-between mx-2.5">
                    <span>Total Outstanding</span>
                    <span>R 40.00</span>
                  </div>
                  <div className="flex justify-between mx-2.5">
                    <span>Payments Completed Cash</span>
                    <span>R 1350.00</span>
                  </div>
                  <div className="flex justify-between mx-2.5">
                    <span>Payments Completed EFT</span>
                    <span>R 0.00</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </section>
      </body>
    </>
  );
}

export default Dashboard;
