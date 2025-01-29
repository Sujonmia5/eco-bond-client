"use client";
import React from "react";
import { Card, Col } from "antd"; // Import Ant Design components
import Link from "next/link";
import Image from "next/image";

const { Meta } = Card;
const ServiceCard = ({ post }) => {
  return (
    <>
      <Col xs={24} sm={12} md={8} key={post.id}>
        <Card
          hoverable
          cover={
            <Image
              height={192}
              width={192}
              alt={post.title}
              src={post.imageSrc}
              className="object-cover"
            />
          } // Image styling
          className="mb-6 rounded-lg shadow-md" // Card Styling with Tailwind
        >
          <div className="flex items-center justify-between mb-2">
            <span className="text-gray-500 text-sm">{post.date}</span>
            <span className="bg-gray-200 text-gray-600 px-2 py-1 rounded-md text-xs">
              {post.category}
            </span>
          </div>
          <Meta
            title={
              <h3 className="text-lg font-medium text-gray-800">
                {post.title}
              </h3>
            }
            description={
              <div className="mt-2">
                <p className="text-gray-600 line-clamp-3">{post.excerpt}</p>
                <Link
                  href={post.link || "/"}
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
