import { NextApiRequest, NextApiResponse } from "next";
import COMMENTS from "../../../src/data/comments";
import IComment from "../../../src/interfaces/comment";

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<IComment[] | IComment>
) {
  switch (req.method) {
    case "POST": {
      const comment: IComment = { id: Date.now(), text: req.body.comment };
      COMMENTS.push(comment);
      res.status(200).json(comment);
    }
    case "GET": {
      res.status(200).json(COMMENTS);
      break;
    }
  }
}
