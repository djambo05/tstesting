import React, { FC, useRef, useState } from "react";

const EventsExample: FC = () => {
  const [value, setValue] = useState<string>("");
  const [isDrag, setIsDrag] = useState<boolean>(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  const clickHandler = (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(inputRef.current?.value);
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
      <input
        placeholder="managed"
        value={value}
        onChange={changeHandler}
        type="text"
      />
      <input ref={inputRef} placeholder="unmanaged" type="text" />
      <button onClick={clickHandler}>Button</button>
    </div>
  );
};

export default EventsExample;
