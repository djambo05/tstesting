import React, { FC } from "react";
import { IUsers } from "./types/types";
import User from "./User";

interface UserListProps {
  users: IUsers[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => (
        <User user={user} />
      ))}
    </div>
  );
};

export default UserList;
