import React, { FC } from "react";
import { IUsers } from "./types/types";
interface UserProps {
  user: IUsers;
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <div>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице{" "}
      {user.address.street}
    </div>
  );
};

export default User;
