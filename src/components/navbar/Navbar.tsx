"use client"
import React from "react";
import "./navbar.css";
import { usePathname, useRouter } from "next/navigation";
// import { toast } from "react-toastify";
import { toast } from "sonner";
const Navbar = () => {
    const route =useRouter()


    const pathname = usePathname();

  const handleClick = () => {
    if (pathname === "/") {
      toast.success("Already on Home 😅",{
  duration: 2000,
});
    } else {
      route.push("/");
    }
  };
  return (
    <div className="navbar">
      <div className="nav">
        <div className="nav-content">
          <button className="navbtn-1" onClick={handleClick}>COD<span>≡</span>R</button>
          <button className="navbtn" onClick={()=>route.push("/#projects")}>projects</button>
          <button className="navbtn"onClick={()=>route.push("/#about-me")}>about me</button>
          <button className="navbtn" onClick={()=>route.push("/contact")}>contact me</button>
          <button className="navbtn"onClick={()=>route.push("/#education")}>education</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
