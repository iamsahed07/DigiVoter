import React from "react";

type FooterProps = {};

const Footer: React.FC<FooterProps> = ({}) => {
  return (
    <div
      style={{
        width: "100%",
        height: "30px",
        backgroundColor: "#4C3EDA",
        position: "fixed",
        bottom: "0",
        left: "0",
        zIndex: "10000",
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <h4 style={{ color: "white", fontWeight: "normal" }}>
          PROJECT B.Tech CSE - 2024 By Sahed Ali
        </h4>
      </div>
    </div>
  );
};

export default Footer;
