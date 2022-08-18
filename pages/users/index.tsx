import { GetStaticProps, NextPage } from "next";
import React from "react";
import IUser from "../../src/interfaces/user";
import axios from "axios";
import User from "../../src/components/User";
const Users: NextPage<IUsersProps> = ({ users }) => {
  return (
    <>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </>
  );
};

export const getStaticProps: GetStaticProps<IUsersProps> = async () => {
  const users = await axios
    .get<IUser[]>("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);

  return {
    props: { users },
  };
};

interface IUsersProps {
  users: IUser[];
}

export default Users;
