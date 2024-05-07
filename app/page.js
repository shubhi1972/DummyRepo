"use client";
import React from "react";
import Body from "@/Components/Body";

// const imageList = [
//   { id: "img1", title: "Image 1", url: "./Images/img1.jpg" },
//   { id: "img2", title: "Image 2", url: "./Images/img2.jpg" },
//   { id: "img3", title: "Image 3", url: "./Images/img3.jpg" },
// ];

const imageList =[
  "./Images/img1.jpg",
  "./Images/img2.jpg",
  "./Images/img3.jpg",
];

const page = () => {
  return (
    <>
      <Body images={imageList} />
    </>
  );
};

export default page;
