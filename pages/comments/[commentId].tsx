import axios from "axios";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import IComment from "../../src/interfaces/comment";
import { useRouter } from "next/router";
import COMMENTS from "../../src/data/comments";

const CommentById: NextPage<CommentByIdProps> = ({ comment }) => {
  const { isFallback } = useRouter();
  if (isFallback) {
    return <h1>Loading ...</h1>;
  }
  return (
    <div>
      {comment.id}- {comment.text}
    </div>
  );
};

export default CommentById;

export const getStaticProps: GetStaticProps<
  CommentByIdProps,
  { commentId: string }
> = async ({ params }) => {
  if (params?.commentId) {
    const comment = COMMENTS.find(
      (comment) => comment.id === parseInt(params.commentId)
    );
    if (!comment) {
      return { notFound: true };
    }
    return { props: { comment } };
  }

  return { notFound: true };
};

export const getStaticPaths: GetStaticPaths<{ commentId: string }> = () => {
  return {
    paths: [
      { params: { commentId: "1" } },
      { params: { commentId: "2" } },
      { params: { commentId: "3" } },
    ],
    fallback: true,
  };
};

interface CommentByIdProps {
  comment: IComment;
}
