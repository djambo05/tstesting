import React, { FC } from "react";
import { IUser } from "../types/types";
interface UserProps {
  user: IUser;
  onClick: (user: IUser) => void
}

const User: FC<UserProps> = ({ user, onClick }) => {
  return (
    <div onClick={() => onClick(user)}>
      {user.id}. {user.name} проживает в городе {user.address.city} на улице
      {user.address.street}
    </div>
  );
};

export default User;
