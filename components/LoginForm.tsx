'use client'
import React from "react";
import AuthButton from "./AuthButton";
import { loginWithCredentials } from "@/actions/auth";

const LoginForm = () => {
  return (
    <div>
      <form action={loginWithCredentials} className="flex w-full flex-col gap-4">
        <div className="">
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-200"
          >
            Email
          </label>
          <input
            type="email"
            name="email"
            id="Email"
            placeholder="Enter your email"
            className="mt-1 w-full px-4 p-2 border border-gray-700 bg-white text-slate-700"
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-200"
          >
            Password
          </label>
          <input
            type="password"
            name="password"
            id="Password"
            placeholder="Enter your password"
            className="mt-1 w-full px-4 p-2 border border-gray-700 bg-white text-slate-700"
          />
        </div>
        <div className="mt-4">
          <AuthButton />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
