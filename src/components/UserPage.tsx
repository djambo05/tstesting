import React, { FC, useEffect, useState } from "react";
import { IUser } from "../types/types";
import List from "./List";
import User from "./UserItem";
import { useNavigate } from "react-router-dom";

const UserPage: FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const history = useNavigate();
  useEffect(() => {
    fetchUsers();
  }, []);

  async function fetchUsers() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users`
      ).then<IUser[]>((res) => res.json());
      setUsers(response);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <List
      items={users}
      renderItem={(user: IUser) => (
        <User
          key={user.id}
          onClick={(user: IUser) => {
            history("/users/" + user.id);
          }}
          user={user}
        ></User>
      )}
    />
  );
};

export default UserPage;
