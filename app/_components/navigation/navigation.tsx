"use client";

import { useState } from "react";
import NavBar from "./navbar";
// import Sidebar from "./sidebar";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
      {/* <Sidebar isOpen={isOpen} toggle={toggle} /> */}
      {/* <Navbar toggle={toggle} /> */}
      <NavBar />
    </>
  );
};

export default Navigation;
