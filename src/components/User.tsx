import React from "react";
import IUser from "../interfaces/user";
const User = ({ user }: { user: IUser }) => {
  return <div>{user.name}</div>;
};

export default User;
