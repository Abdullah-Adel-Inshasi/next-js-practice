import React from "react";
import cleaningDog from "../../../public/cleaning-dog.gif";
import Image from "next/image";
import Link from "next/link";

const PageDoesntExist = () => {
  return (
    <div
      style={{
        padding: "20px 50px",
        display: "flex",
        marginTop: 120,
      }}
    >
      <div
        style={{
          flex: 10,
        }}
      >
        <h1>
          Sorry we&apos;ve been cleaning up, — <br /> this page no longer exists
        </h1>
        <Link href="/" replace>
          <a>
            <h4>Go Home ( our home )</h4>
          </a>
        </Link>
      </div>
      <div style={{ flex: 1 }}></div>
      <div
        style={{
          flex: 10,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image src={cleaningDog} alt="dog cleaning "/>
      </div>
    </div>
  );
};

export default PageDoesntExist;
