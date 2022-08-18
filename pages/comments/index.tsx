import axios from "axios";
import { useState, ChangeEvent, FormEventHandler } from "react";
import IComment from "../../src/interfaces/comment";
const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);
  const [hasError, setHasError] = useState(false);
  const [comment, setComment] = useState("");
  const fetchComments = async () => {
    await axios
      .get<IComment[]>("/api/comments")
      .then((comments) => setComments(comments.data))
      .catch(() => setHasError(true));
  };
  const handleCommentInput = async (e: ChangeEvent<HTMLInputElement>) => {
    setComment(e.target.value);
  };
  const onSubmitComment = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    await axios
      .post("/api/comments", { comment })
      .then((data) => setComments((prev) => [...prev, data.data]));
  };

  const deleteComment = async (id: number) => {
    await axios
      .delete(`/api/comments/${id}`)
      .then((res) => fetchComments())
      .catch((e) => console.log(e));
  };

  if (hasError) {
    return <h1>An Error has occurred</h1>;
  }
  return (
    <>
      <button onClick={fetchComments}>Fetch comments</button>
      <form onSubmit={onSubmitComment}>
        <input type="text" value={comment} onChange={handleCommentInput} />
        <button type="submit">Submit comment</button>
      </form>
      {comments &&
        comments.map((comment) => (
          <>
            <div key={comment.id}>{comment.text}</div>
            <button onClick={() => deleteComment(comment.id)}>
              delete this comment
            </button>
          </>
        ))}
    </>
  );
};

export default Comments;
