import type { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Title = styled.h1`
  font-size: 50px;
  color: ${({ theme }) => theme.colors.primary};
`;

const Home: NextPage = () => {
  return (
    <>
      <Title>Home</Title>
      <Link href="/posts">
        <div>Go to Posts</div>
      </Link>
    </>
  );
};

export default Home;
