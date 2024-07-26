import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog" onSubmit={handleSubmit(onSubmit)}>
            {/* if there is a button in form, it will close the modal */}
            <Link 
            to="/"
            onClick={()=> document.getElementById("my_model_3".close())}
            className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </Link>
            <h3 className="font-bold text-lg ">Login</h3>
            <div className="flex flex-col gap-3">
              <div>
                <span>Email</span>
                <br />
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-80 px-3 py-1 rounded-md outline-none mt-2"
                  {...register("email", { required: true })}
                />
                <br/>
                {errors.email && <span className="text-sm text-red-500">Email is required</span>}
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
                <br/>
                {errors.password && <span className="text-sm text-red-500">Password is required</span>}
              </div>
              <div className="flex justify-between">
                <button
                  
                  className="px-3 py-1 bg-pink-500 text-white rounded-lg "
                >
                  Login
                </button>
                <h2>
                  Not register?
                  <Link
                    to="/signup"
                    onClick={()=> document.getElementById("my_model_3".close())}
                    className=" underline text-blue-500 cursor-pointer"
                  >
                    Signup
                  </Link>
                </h2>
              </div>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
}

export default Login;
