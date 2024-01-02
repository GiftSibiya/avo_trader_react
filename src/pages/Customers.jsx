import React from "react";
import Header from "../components/Header";
import Aside from "../components/Aside";
import DataTable from "react-data-table-component";

function Customers() {
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
    },
    {
      name: "Conatact",
      selector: (row) => row.contact,
    },
    {
      name: "Location",
      selector: (row) => row.location,
    },
  ];
  const data = [
    {
      id: 1,
      name: "Stevie",
      contact: "0123456789",
      location: "Midrand",
    },
  ];
  return (
    <>
      <body className="flex w-screen">
        <Aside />
        <section className="flex flex-col">
          <Header />
          {/* Active Order Header Bar */}
          <div className=" w-[85vw] border-2">
            <DataTable columns={columns} data={data} />
          </div>
        </section>
      </body>
    </>
  );
}

export default Customers;
