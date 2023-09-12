"use client";
import { signIn } from "next-auth/react";
import React from "react";

const SigninBtn = () => {
  return (
    <div className="flex flex-col gap-y-4">
      <button
        onClick={() => signIn("google")}
        className="bg-blue-500 text-white px-4 py-3 "
      >
        Sign in with google
      </button>

      <button
        onClick={() => signIn("github")}
        className="bg-gray-900 text-white px-4 py-3 "
      >
        Sign in with Github
      </button>
    </div>
  );
};

export default SigninBtn;
