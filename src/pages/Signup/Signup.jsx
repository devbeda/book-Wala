import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Signup() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="flex h-screen justify-center items-center ">
      <div className="border-2 shadow-md p-5 rounded-md">
        <div className="">
          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg ">Signup</h3>
            <div className="flex flex-col gap-3">
              <div>
                <span>Name</span>
                <br />
                <input
                  type="text"
                  placeholder="Enter your Name"
                  className="w-80 px-3 py-1 rounded-md outline-none mt-2"
                  {...register("name", { required: true })}
                />
                <br />
                {errors.name && (
                  <span className="text-sm text-red-500">Name is required</span>
                )}
              </div>
              <div>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md outline-none mt-2"
                  {...register("email", { required: true })}
                />
                <br />
                {errors.email && (
                  <span className="text-sm text-red-500">
                    Email is required
                  </span>
                )}
              </div>
              <div>
                <span>Password</span>
                <br />
                <input
                  type="password"
                  placeholder="Enter your password"
                  className="w-80 px-3 py-1 rounded-md outline-none mt-2"
                  {...register("password", { required: true })}
                />
                <br />
                {errors.password && (
                  <span className="text-sm text-red-500">
                    Password is required
                  </span>
                )}
              </div>
              <div className="flex justify-between">
                <button className="px-3 py-1 bg-pink-500 text-white rounded-lg hover:scale-105">
                  Signup
                </button>
                <h2>
                  Have account?
                  <Link
                    to="/"
                    className=" underline text-blue-500 cursor-pointer"
                  >
                    Login
                  </Link>
                </h2>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Signup;
