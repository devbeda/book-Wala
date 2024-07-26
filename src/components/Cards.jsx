import React from "react";

function Cards({ item }) {
    
  return (
    <>
      <div className="mt-4 hover:scale-105 duration-300">
        <div className="card bg-base-100 w-64 md:w-96 shadow-xl">
          <figure>
            <img
            className="w-36 md:w-64 bg-cover"
              src={item.image}
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="item.title">
              {item.name}
              <div className=" ml-3 badge badge-secondary">{item.type}</div>
            </h2>
            <p>{item.title}</p>
            <div className="card-actions justify-between">
              <div className="badge badge-outline">Rs. {item.price}</div>
              <div className=" cursor-pointer px-2 py-2 rounded-lg badge badge-outline duration-200 hover:bg-green-500 hover:text-white">Buy Now</div>

            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
