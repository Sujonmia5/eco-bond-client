"use client";
import { TFAQComponent } from "@/interface/PropsTypes";
import { Collapse } from "antd";
import { useState } from "react";
import { FaMinus, FaPlus } from "react-icons/fa";
const { Panel } = Collapse;

const FAQCard = ({ data, keyNum }: TFAQComponent) => {
  const [activeKey, setActiveKey] = useState([""]); // State to track active panel

  const onChange = (key: string[]) => {
    setActiveKey(key);
  };
  const index = keyNum + 1;
  return (
    <>
      <Collapse
        key={index}
        defaultActiveKey={["1", "2"]}
        activeKey={activeKey} // Use activeKey to control open panels
        onChange={onChange} // Call onChange when panel is changed
        bordered={false}
        className="[&>.ant-collapse-item]:border-b [&>.ant-collapse-item]:border-gray-200 [&>.ant-collapse-item]:last:border-b-0 [&] ant-collapse-content ant-collapse-content-active:p-4 mb-5"
        size="large"
      >
        <Panel
          key={index + 1}
          showArrow={false}
          header={
            <div className="flex items-center text-white font-medium text-xl">
              <span className="mr-2 font-bold">
                {activeKey[1] === String(index + 1) ? (
                  <FaMinus className="size-4 font-bold" />
                ) : (
                  <FaPlus className="size-4 font-bold" />
                )}{" "}
              </span>
              {data.question}
            </div>
          }
          className="[&>.ant-collapse-header]:font-medium [&>.ant-collapse-header]:text-lg [&>.ant-collapse-header]:bg-green-500"
        >
          <p>{data.answer}</p>
        </Panel>
      </Collapse>
    </>
  );
};

export default FAQCard;
