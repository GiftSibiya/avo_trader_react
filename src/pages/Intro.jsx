/// Import Dependencies ///
import React from "react";
import { Link } from "react-router-dom";
///

function Intro() {
  return (
    <>
      <body className=" flex justify-center items-center w-screen h-screen  bg-green-900">
        <section className=" flex w-[65vw] h-[600px] rounded-md bg-white">
          <div className="bg-green-600 w-[50%] rounded-lg h-full flex items-center justify-center">
            <div className=" flelx-col items-center justify-center ">
              <p className="text-white text-center">Welcome Back</p>
              <p className="text-white text-center">
                Log In to access the system
              </p>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center gap-5 w-[50%] rounded h-full">
            <p className="text-3xl gap-5">Log In</p>
            <form className="flex flex-col gap-2 justify-center items-center ">
              <input
                className="w-[250px] h-10 border-2 border-black "
                placeholder="User Name"
              ></input>
              <input
                className="w-[250px] h-10 border-2 border-black "
                placeholder="Password"
              ></input>
              <Link to={"/dashboard"}>
                <button className="bg-green-700 p-3 rounded-3xl ">
                  {" "}
                  Continue{" "}
                </button>
              </Link>
            </form>
          </div>
        </section>
      </body>
    </>
  );
}

export default Intro;
