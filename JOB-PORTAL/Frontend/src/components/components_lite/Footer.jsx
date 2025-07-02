import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      {/* Footer for the current page */}
      <div
        style={{
          textAlign: "center",
          padding: "20px",
          backgroundColor: "#f1f1f1",
        }}
      >
        <p>© 2025  All rights reserved.</p>
        <p>
          Powered by <a href="https://github.com/janeshkrish">JaneshKrishna</a>
        </p>
      </div>
    </div>
  );
};

export default Footer;
