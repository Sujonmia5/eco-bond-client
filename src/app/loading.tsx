"use client";
import { Flex, Spin } from "antd";
import React from "react";

const LoadingPage = () => {
  return (
    <>
      <Flex gap={"middle"} vertical>
        <Spin tip="Loading" size="large">
          Loading..
        </Spin>
      </Flex>
    </>
  );
};

export default LoadingPage;
