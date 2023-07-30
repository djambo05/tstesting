import React, { FC } from "react";
import { IUsers } from "./types/types";

interface UserListProps {
  users: IUsers[];
}

const UserList: FC<UserListProps> = ({ users }) => {
  return (
    <div>
      {users.map((user) => {
        return (
          <div key={user.id}>
            {user.id}. {user.name} проживает в городе {user.address.city} на
            улице {user.address.street}
          </div>
        );
      })}
    </div>
  );
};

export default UserList;
