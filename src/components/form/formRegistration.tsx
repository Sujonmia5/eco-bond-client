"use client";
import { Form, Input, Button } from "antd";
import { Controller, FieldValues, useForm } from "react-hook-form";

const FormRegistration = () => {
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
        <Form.Item label="Name" className="mb-4">
          <Controller
            name="name"
            control={control}
            rules={{ required: "Name is required" }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter your name" />
            )}
          />
          {errors.name?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.name.message)}
            </p>
          )}
        </Form.Item>

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

        <Form.Item label="Phone Number" className="mb-4">
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]+$/,
                message: "Phone number must be numeric",
              },
            }}
            render={({ field }) => (
              <Input {...field} placeholder="Enter your phone number" />
            )}
          />
          {errors.phone?.message && (
            <p className="text-red-500 text-sm mt-1">
              {String(errors.phone.message)}
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
          Register
        </Button>
      </Form>
    </>
  );
};

export default FormRegistration;
