import { NextApiRequest, NextApiResponse } from "next";
import COMMENTS from "../../../src/data/comments";
import IComment from "../../../src/interfaces/comment";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IComment | { error: string }>
) {
  const { commentId } = req.query;
  if (commentId) {
    const comment = COMMENTS.find((comment) => comment.id === +commentId);
    if (comment) {
      switch (req.method) {
        case "GET": {
          res.status(200).json(comment);
          break;
        }
        case "DELETE": {
          const index = COMMENTS.indexOf(comment);
          COMMENTS.splice(index, 1);

          if (index === -1) {
            res.status(500).json({ error: "pleas reimplement the Endpoint" });
          }
          res.status(200).json(comment);
        }
      }
    } else if (comment === undefined) {
      res.status(404).json({ error: "this comment doesnt exist" });
    }
  } else {
    res.status(404).json({ error: "please specify a comment id" });
  }
}
