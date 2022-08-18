import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Link from "next/link";
import React from "react";
import IPost from "../../src/interfaces/post";

const Posts: NextPage<PostsProps> = ({ posts }) => {
  return (
    <>
      {posts.map((post) => (
        <div key={post.id}>
          <Link href={`/posts/${post.id}`} passHref>
            <h2>
              {post.id} {post.title}
            </h2>
          </Link>
        </div>
      ))}
    </>
  );
};

export default Posts;

export const getStaticProps: GetStaticProps<
  PostsProps,
  { id: string }
> = async () => {
  const posts = await axios
    .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
    .then((post) => post.data);
  return {
    props: {
      posts: posts,
    },
  };
};

interface PostsProps {
  posts: IPost[];
}
