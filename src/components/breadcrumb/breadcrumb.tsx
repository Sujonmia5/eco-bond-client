"use client";

import { Breadcrumb } from "antd";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

const BreadcrumbHero = () => {
  const pathname = usePathname();

  const PathArray = pathname.split("/").filter((segment) => segment);

  const segmentLabels: Record<string, string> = {
    about: "About Us",
    products: "Products",
    contact: "Contact Us",
    "[id]": "Product Details", // Placeholder for dynamic segments
  };

  return (
    <div className="h-96 w-full  bg-breadcrumb bg-cover bg-center -mt-16">
      <div className="bg-black/20 w-full h-96 flex items-center justify-center">
        <div className="p-4">
          <div>
            <h1 className="text-3xl text-center font-bold uppercase tracking-widest text-white">
              {segmentLabels[PathArray[0]] || PathArray[0]}
            </h1>
          </div>
          <Breadcrumb separator="/" className="text-lg !text-white font-medium">
            <Breadcrumb.Item>
              <Link href="/" className="!text-green-700 hover:underline">
                Home
              </Link>
            </Breadcrumb.Item>

            {PathArray.map((pathName: string, i) => {
              const isLast: boolean = i === PathArray.length - 1;
              const url = "/" + PathArray.slice(0, i + 1).join("/");
              console.log(url);

              const label = segmentLabels[pathName] || pathName;

              return (
                <Breadcrumb.Item key={url}>
                  {isLast ? (
                    <span className="text-green-500 capitalize cursor-default">
                      {label}
                    </span>
                  ) : (
                    <Link
                      href={url}
                      className="!text-green-500 hover:underline"
                    >
                      {label}
                    </Link>
                  )}
                </Breadcrumb.Item>
              );
            })}
          </Breadcrumb>
        </div>
      </div>
    </div>
  );
};

export default BreadcrumbHero;
