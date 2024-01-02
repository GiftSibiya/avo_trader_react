import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import { useState } from "react";
import { Link } from "react-router-dom";

function CreateOrder() {
  const [selectedOption, setSelectedOption] = useState(""); // State to track the selected option
  const [selectedDeliveryOption, setSelectedDeliveryOption] = useState("");

  const handleOptionChange = (event) => {
    setSelectedOption(event.target.value);
  };
  const handleDeliveryOptionChange = (event) => {
    setSelectedDeliveryOption(event.target.value);
  };

  return (
    <>
      <body className="flex w-screen">
        <Aside />
        <section className="flex flex-col">
          <Header />
          {/* Active Order Header Bar */}
          <div className="flex flex-col items-center justify-center h-full w-[85vw] border-2 ">
            <span>Create a New Order</span>
            {/* Form Begins here */}
            <form className="w-70">
              {/* Customer and Batch */}
              <div className="flex">
                <div className="flex flex-col my-5">
                  <span>Customer</span>
                  <input className="border-2 m-2" type="text" name="" id="" />
                </div>
                <div className="flex flex-col my-5">
                  <span>Batch</span>
                  <input className="border-2 m-2" type="text" name="" id="" />
                </div>
              </div>
              {/* Batch and Number Of bags */}
              <div className="flex">
                <div className="flex flex-col my-5">
                  <span>Number Of Bags</span>
                  <input className="border-2 m-2" type="text" name="" id="" />
                </div>
                <div className="flex flex-col my-5">
                  <span>Amount(R)</span>
                  <input className="border-2 m-2" type="text" name="" id="" />
                </div>
              </div>
              {/* Botom Options */}
              <div className="flex justify-between">
                {/* Payment Status */}
                <div className="flex flex-col">
                  <label>
                    <input
                      type="radio"
                      name="paymentOption"
                      value="Payment Pending"
                      checked={selectedOption === "Payment Pending"}
                      onChange={handleOptionChange}
                    />
                    Payment Pending
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="paymentOption"
                      value="Partial Payment"
                      checked={selectedOption === "Partial Payment"}
                      onChange={handleOptionChange}
                    />
                    Partial Payment
                  </label>

                  <label>
                    <input
                      type="radio"
                      name="paymentOption"
                      value="Payment-Pening"
                      checked={selectedOption === "Payment-Pening"}
                      onChange={handleOptionChange}
                    />
                    Payment-Pening
                  </label>
                </div>
                <div>
                  {/* Delivery Status */}
                  <div className="flex flex-col">
                    <label>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="Delivery-Complete"
                        checked={selectedDeliveryOption === "Delivery-Complete"}
                        onChange={handleDeliveryOptionChange}
                      />
                      Delivery-Complete
                    </label>

                    <label>
                      <input
                        type="radio"
                        name="deliveryOption"
                        value="Delivery-pending"
                        checked={selectedDeliveryOption === "Delivery-pending"}
                        onChange={handleDeliveryOptionChange}
                      />
                      Delivery-pending
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex my-5">
                <Link to={"/dashboard"}>
                  <button className="bg-red-500 p-2 rounded-lg mx-2 ">
                    Cancel
                  </button>
                </Link>
                <button
                  className="bg-green-500 p-2 rounded-lg mx-2"
                  type="submit"
                >
                  Continue
                </button>
              </div>
            </form>
          </div>
        </section>
      </body>
    </>
  );
}

export default CreateOrder;
