"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-hot-toast";
import ButtonLoader from "../layout/ButtonLoader";
import { useLoginMutation } from "@/redux/api/authApi"; // Import useLoginMutation from Redux Toolkit Query
import React, {
  ChangeEventHandler,
  FormEvent,
  useEffect,
  useState,
} from "react";
const Login = () => {
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const { email, password } = user;

  const router = useRouter();
  const [login, { isLoading, error, isSuccess, data }] = useLoginMutation();

  useEffect(() => {
    if (error && "data" in error) {
      toast.error(error?.data?.errMessage);
    }

    if (isSuccess && data?.token) {
      // Save token in localStorage
      localStorage.setItem("token", data.token);
      router.push("/");
      toast.success("login successful");
    }
  }, [error, isSuccess, data]);
  const submitHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const userData = {
      email,
      password,
    };

    login(userData);
  };
  const onChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  return (
    <div className="row wrapper">
      <div className="col-10 col-lg-5">
        <form className="shadow rounded bg-body" onSubmit={submitHandler}>
          <h1 className="mb-3">Login</h1>
          <div className="mb-3">
            <label className="form-label" htmlFor="email_field">
              {" "}
              Email{" "}
            </label>
            <input
              type="email"
              id="email_field"
              className="form-control"
              name="email"
              value={email}
              onChange={onChange}
            />
          </div>

          <div className="mb-3">
            <label className="form-label" htmlFor="password_field">
              {" "}
              Password{" "}
            </label>
            <input
              type="password"
              id="password_field"
              className="form-control"
              name="password"
              value={password}
              onChange={onChange}
              disabled={isLoading}
            />
          </div>

          <button
            id="login_button"
            type="submit"
            className="btn form-btn w-100 py-2"
            disabled={isLoading}
          >
            {isLoading ? <ButtonLoader /> : "LOGIN"}
          </button>

          <div className="mt-3 mb-4">
            <a href="/register" className="float-end">
              {" "}
              New User? Register Here{" "}
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
