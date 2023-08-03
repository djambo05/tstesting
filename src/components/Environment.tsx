import React, { FC, useState } from "react";

export enum EnvVariant {
  middle = "15px",
  easy = "5px",
}

interface EnvProps {
  width?: string;
  height: string;
  variant: EnvVariant;
  children: React.ReactNode;
  onClick: (num: number) => void;
}

const Env: FC<EnvProps> = ({ width, height, children, variant, onClick }) => {
  const [state, setState] = useState(0);
  return (
    <div
      style={{
        width,
        height,
        backgroundColor: "grey",
      }}
    >
      <header style={{ fontSize: "calc(10px + 2vmin)", color: "white" }}>
        Environment
      </header>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          padding: "10px",
          margin: "10px",
          textAlign: "left",
          border: "2px solid black",
          borderRadius:
            variant === EnvVariant.easy ? EnvVariant.easy : EnvVariant.middle,
        }}
      >
        <button onClick={() => onClick(state)}>Click</button>
        {children}
      </div>
    </div>
  );
};

export default Env;
