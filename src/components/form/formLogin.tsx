"use client";
import React from "react";
import { Form, Input, Button } from "antd";
import { Controller, FieldValues, useForm } from "react-hook-form";

const FormLogin = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const onSubmit = (data) => {
    console.log(data);
  };

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

        <Button type="primary" htmlType="submit" className="w-full">
          Login
        </Button>
      </Form>
    </>
  );
};

export default FormLogin;
