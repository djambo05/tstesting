import React, { useEffect, useState } from "react";
import "./App.css";
import Env, { EnvVariant } from "./components/Environment";
import { ITodo, IUser } from "./types/types";
import List from "./components/List";
import User from "./components/UserItem";
import TodoItem from "./components/TodoItem";
import EventsExample from "./components/EventsExample";

function App() {
  const [users, setUsers] = useState<IUser[]>([]);
  const [todos, setTodos] = useState<ITodo[]>([])
  useEffect(() => {
    fetchUsers();
    fetchTodos()
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
  async function fetchTodos() {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/todos?_limit=10`
      ).then<ITodo[]>((res) => res.json());
      setTodos(response);
    } catch (e) {
      alert(e);
    }
  }


  return (
    <div className="App">
      <Env
        onClick={(num) => console.log("clicked", num)}
        height="50vh"
        variant={EnvVariant.easy}
      >
        <div>useState</div>
        <div>useEffect</div>
        <div>useRef</div>
        <div>useMemo</div>
        <div>useContext</div>
        <div>useCallBack</div>
      </Env>
      <List
        items={users}
        renderItem={(user: IUser) => <User key={user.id} user={user}></User>}
      />
      <List
        items={todos}
        renderItem={(todo: ITodo) => <TodoItem key={todo.id} todo={todo}/>}
      />
      <EventsExample/>
    </div>
  );
}

export default App;
