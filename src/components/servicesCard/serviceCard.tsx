"use client";
import React from "react";
import { Card, Col } from "antd"; // Import Ant Design components
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;
const ServiceCard = ({ blog }: { blog: Record<string, unknown> }) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} key={blog?._id as string}>
        <Card
          hoverable
          cover={
            <Image
              height={192}
              width={192}
              alt={blog?.content as string}
              src={blog?.imageUrl as string}
              className="object-cover"
            />
          } // Image styling
          className="mb-6 rounded-lg shadow-md" // Card Styling with Tailwind
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">1972/12/05</span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs">
              {!blog?.totalVote}
            </span>
          </div>
          <Meta
            title={
              <h3 className="text-lg font-medium text-gray-800">
                {!blog?.content}
              </h3>
            }
            description={
              <div className="mt-2">
                <p className="text-gray-600 line-clamp-3">
                  {!blog.totalComment}
                </p>
                <Link
                  href={blog.imageUrl || "/"}
                  className="text-blue-500 hover:underline mt-4 inline-block"
                >
                  Read More
                </Link>
              </div>
            }
          />
        </Card>
      </Col>
    </>
  );
};

export default ServiceCard;
