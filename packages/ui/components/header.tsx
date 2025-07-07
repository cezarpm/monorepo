import React from "react";

interface HeaderProps {
  title: string;
}

export const Header: React.FC<HeaderProps> = ({ title }) => {
  return (
    <header
      id="header"
      style={{
        color: "#f1f1f1",
        fontSize: 30,
        fontFamily: "Montserrat",
        backgroundColor: "purple",
      }}
    >
      <h1>{title}</h1>
    </header>
  );
};
