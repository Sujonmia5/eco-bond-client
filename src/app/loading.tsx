"use client";
import { Flex, Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return (
    <div className="h-screen w-full overflow-hidden overscroll-none flex items-center justify-center">
      <Flex gap={"middle"} vertical>
        <Spin tip="Loading" size="large">
          Loading..
        </Spin>
      </Flex>
    </div>
  );
};

export default LoadingPage;
