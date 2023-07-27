import React from "react";

interface EnvProps {
  width?: string;
  height: string;
  children?: React.ReactNode;
}

const Env = ({ width, height, children }: EnvProps) => {
  return (
    <div style={{ width, height, backgroundColor: "grey" }}>
      <header style={{ fontSize: "calc(10px + 2vmin)", color: "white" }}>
        Environment
      </header>
      <div>{children}</div>
    </div>
  );
};

export default Env;
