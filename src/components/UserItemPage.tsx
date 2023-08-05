import React, { FC, useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { IUser } from "../types/types";

interface UserItemPageParams {
  id: string;
  [key: string]: string | undefined;
  
}

const UserItemPage: FC = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const params = useParams<UserItemPageParams>();
  const history = useNavigate();
  useEffect(() => {
    fetchUser();
  }, []);

  async function fetchUser() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users/` + params.id
      ).then<IUser>((res) => res.json());
      setUser(response);
    } catch (e) {
      alert(e);
    }
  }
  return (
    <div>
      <button onClick={() => history("/users")}>back</button>
      <h1>User Page {user?.name}</h1>
      <div>{user?.email}</div>
      <div>
        {user?.address.city} {user?.address.street} {user?.address.zipcode}
      </div>
    </div>
  );
};

export default UserItemPage;
