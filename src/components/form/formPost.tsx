"use client";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Upload, Button, Form, Input, UploadProps, UploadFile } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import { useState } from "react";

const PostForm = () => {
  const { control, handleSubmit, reset, watch } = useForm<FieldValues>();
  const watchContent = watch("content");
  const watchImage = watch("image");
  const [fileList, setFileList] = useState<UploadFile[]>([]);

  const onSubmit = (data: FieldValues) => {
    if (!data.content && !data.image) return;
    const postData = {
      content: data?.content || "",
      image: data.image || "",
    };
    console.log(postData);
    setFileList([]);
    reset();
  };

  const handleChange: UploadProps["onChange"] = ({ fileList: newFileList }) => {
    setFileList(newFileList);
  };

  const uploadButton = (
    <button style={{ border: 0, background: "none" }} type="button">
      <PlusOutlined />
      <div style={{ marginTop: 8 }}>Upload</div>
    </button>
  );

  return (
    <div className="bg-white p-4 rounded-md shadow mb-4">
      <Form layout="vertical" onFinish={handleSubmit(onSubmit)}>
        {/* Text Area */}
        <Form.Item label="Write something">
          <Controller
            name="content"
            control={control}
            render={({ field }) => (
              <Input.TextArea
                {...field}
                rows={3}
                placeholder="Write something..."
              />
            )}
          />
        </Form.Item>

        {/* Image Upload */}
        <Form.Item label="Upload Image">
          <Controller
            name="image"
            control={control}
            render={({ field }) => (
              <Upload
                {...field}
                listType="picture-card"
                fileList={fileList}
                onChange={(file) => {
                  field.onChange(file);
                  handleChange(file);
                }}
                maxCount={1}
              >
                {fileList.length >= 1 ? null : uploadButton}
              </Upload>
            )}
          />
        </Form.Item>

        {/* Submit Button */}
        <Button
          type="primary"
          htmlType="submit"
          disabled={!watchContent && !watchImage}
          className="px-6 font-medium uppercase"
        >
          Post
        </Button>
      </Form>
    </div>
  );
};

export default PostForm;
