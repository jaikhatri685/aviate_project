import React from "react";
import { heading } from "../../config/api";

/**
 * Header Component
 * @returns
 */

function Header() {
  return (
    <div className="header">
      <span className="text-center">{heading}</span>
    </div>
  );
}

export default Header;
