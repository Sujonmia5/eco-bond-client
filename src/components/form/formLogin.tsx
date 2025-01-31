"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import { Controller, FieldValues, useForm } from "react-hook-form";
import { useLoginUserMutation } from "@/redux/api/auth/auth";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { setUserAndToken } from "@/utils/setUser";

const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();
  const router = useRouter();
  const [loginUser, { isLoading }] = useLoginUserMutation();
  const dispatch = useAppDispatch();
  const userInfo = useAppSelector((state) => state.auth.user);

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await loginUser({
        email: data.email,
        password: data.password,
      }).unwrap();
      if (res.success) {
        console.log(res);
        toast.success("Registration successful!");
        setUserAndToken(res, dispatch);
        router.push("/news-feed");
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error("something went wrong");
    }
  };

  if (userInfo?.name && userInfo?.email && userInfo?.role) {
    router.push("/news-feed");
    return;
  }

  return (
    <>
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        <Form.Item label="Email" className="mb-4">
          <Controller
            name="email"
            control={control}
            rules={{ required: "Email is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter your email" />
            )}
          />
          {errors.email?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.email.message)}
            </p>
          )}
        </Form.Item>

        <Form.Item label="Password" className="mb-4">
          <Controller
            name="password"
            control={control}
            rules={{ required: "Password is required" }}
            render={({ field }) => (
              <Input.Password {...field} placeholder="Enter your password" />
            )}
          />
          {errors.password?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.password.message)}
            </p>
          )}
        </Form.Item>

        <Button
          loading={isLoading}
          type="primary"
          htmlType="submit"
          className="w-full"
        >
          Login
        </Button>
        <p className="text-center mt-4">
          Don&apos;t have an account?{" "}
          <a className="text-green-500" href="/signup">
            Sign Up
          </a>
        </p>
      </Form>
    </>
  );
};

export default FormLogin;
