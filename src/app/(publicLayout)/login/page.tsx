import FormLogin from "@/components/form/formLogin";
import React from "react";

const Login = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-page-image bg-cover bg-center -mt-16">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Login</h2>
        <FormLogin />
      </div>
    </div>
  );
};

export default Login;
