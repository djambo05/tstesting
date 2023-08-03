import { ReadVResult } from "fs";
import React, { FC, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(value);
  };

  const dragHandler = (e: React.DragEvent<HTMLDivElement>) => {
    console.log("DRAG");
  };

  const dropHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
    console.log("DROP");
  };
  const leaveHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(false);
  };
  const dragWithPreventHandler = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDrag(true);
  };
  return (
    <div>
      <div
        draggable
        onDrag={dragHandler}
        style={{ width: "100px", height: "100px", backgroundColor: "red" }}
      />
      <div
        draggable
        onDrop={dropHandler}
        onDragLeave={leaveHandler}
        onDragOver={dragWithPreventHandler}
        style={{
          width: "100px",
          height: "100px",
          marginTop: "20px",
          backgroundColor: isDrag ? "blue" : "red",
        }}
      />
      <input value={value} onChange={changeHandler} type="text" />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
};

export default EventsExample;
