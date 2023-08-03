import React, { FC } from "react";
import { IUser } from "../types/types";
interface UserProps {
  user: IUser;
}

const User: FC<UserProps> = ({ user }) => {
  return (
    <div>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице
      {user.address.street}
    </div>
  );
};

export default User;
