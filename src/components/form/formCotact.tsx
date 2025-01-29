"use client";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { Form, Input, Button, message } from "antd";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log("Form data submitted:", data);
      message.success("Message sent successfully!");
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
      message.error("Failed to send message. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container max-w-2xl mx-auto p-4 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">
        {" "}
        Dont Hesited To Contact Us
      </h2>

      <Form onFinish={handleSubmit(onSubmit)} className="space-y-4">
        <div className=" space-y-4 px-5">
          <Form.Item
            label="Name"
            className="mb-0"
            validateStatus={errors.name ? "error" : ""}
            help={errors.name?.message}
          >
            <Controller
              name="name"
              control={control}
              rules={{ required: "Name is required" }}
              render={({ field }) => <Input {...field} placeholder="Name" />}
            />
          </Form.Item>

          <Form.Item
            label="Email"
            className="mb-0"
            validateStatus={errors.email ? "error" : ""}
            help={errors.email?.message}
          >
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email format",
                },
              }}
              render={({ field }) => <Input {...field} placeholder="Email" />}
            />
          </Form.Item>
        </div>{" "}
        <Form.Item
          label="Your Message"
          className="mb-4"
          validateStatus={errors.message ? "error" : ""}
          help={errors.message?.message}
        >
          <Controller
            name="message"
            control={control}
            rules={{ required: "Message is required" }}
            render={({ field }) => (
              <Input.TextArea {...field} rows={4} placeholder="Your Message" />
            )}
          />
        </Form.Item>
        <Form.Item className="text-center">
          {" "}
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="bg-green-500 hover:bg-green-700 border-none"
          >
            {" "}
            {loading ? "Submitting..." : "Send Message"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ContactForm;
