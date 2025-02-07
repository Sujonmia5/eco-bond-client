/* eslint-disable @typescript-eslint/no-unused-vars */
"use client";
import { useRegisterUserMutation } from "@/redux/api/auth/auth";
import { useAppSelector } from "@/redux/hook";
import { Form, Input, Button } from "antd";
import { useRouter } from "next/navigation";
import { Controller, FieldValues, useForm } from "react-hook-form";
import toast from "react-hot-toast";

const FormRegistration = () => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>();

  const [registerUser, { isLoading, data, isSuccess }] =
    useRegisterUserMutation();
  const userInfo = useAppSelector((state) => state.auth.user);

  const onSubmit = async (data: FieldValues) => {
    try {
      const res = await registerUser({
        name: data.name,
        email: data.email,
        password: data.password,
        contact: data.phone,
      }).unwrap();
      if (res.success) {
        toast.success("Registration successful!");
        router.push("/news-feed");
      }
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

        <Button
          type="primary"
          loading={isLoading}
          htmlType="submit"
          className="w-full"
        >
          Register
        </Button>
        <p className="text-center mt-5">
          Already have an account?{" "}
          <a
            href="#"
            className="text-green-500"
            onClick={() => router.push("/login")}
          >
            Login
          </a>
        </p>
      </Form>
    </>
  );
};

export default FormRegistration;
