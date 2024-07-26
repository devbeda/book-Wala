import React from "react";
import banner from "../assets/image/banner.jpg"

function Banner() {
  return (
    <>
      <div className="order-2 max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row gap-5 mt-6">
        <div className=" w-full md:w-1/2 flex flex-col gap-4">
          <h1 className="text-4xl font-bold">
            Hello, welcome here to learn something{" "}
            <span className="text-pink-500">new everyday!!</span>
          </h1>
          <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ducimus
          laboriosam error in tempore. Omnis possimus autem aut at iure
          excepturi nisi similique quis, provident facilis dolor odio eaque iste
          totam?
        </p>
        <label className="input input-bordered flex items-center gap-2">
          Email
          <input type="text" className="grow" placeholder="your@email.com" />
        </label>
        <button className="btn btn-outline">Default</button>
        </div>
        
        <div className="order-1 w-full md:w-1/2">
            <img className="w-88" src={banner} alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
