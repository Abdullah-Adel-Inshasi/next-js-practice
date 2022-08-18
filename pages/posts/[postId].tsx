import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import IPost from "../../src/interfaces/post";
import { useRouter } from "next/router";
const PostDetails: NextPage<{ post: IPost }> = ({ post }) => {
  const router = useRouter();
  if (router.isFallback) {
    return <h1>Loading ...</h1>;
  }
  return (
    <>
      <h1>{post.title}</h1>
      <h5>{post.body}</h5>
    </>
  );
};

export default PostDetails;

export const getStaticProps: GetStaticProps<
  { post: IPost },
  { postId: string }
> = async (context) => {
  const { params } = context;
  const post = await axios
    .get<IPost>(`https://jsonplaceholder.typicode.com/posts/${params?.postId}`)
    .then((data) => data.data)
    .catch(() => {});

  if (!post) {
    return { notFound: true };
  }

  return { props: { post } };
};

export const getStaticPaths: GetStaticPaths<{
  postId: string;
}> = async () => {
  // const paths: GetStaticPathsResult<{ postId: string }>["paths"] = await axios
  //   .get<IPost[]>(`https://jsonplaceholder.typicode.com/posts`)
  //   .then((posts) =>
  //     posts.data.map((post) => ({ params: { postId: `${post.id}` } }))
  //   );

  return {
    paths: [
      { params: { postId: "1" } },
      { params: { postId: "2" } },
      { params: { postId: "3" } },
    ],
    fallback: true,
  };
};
