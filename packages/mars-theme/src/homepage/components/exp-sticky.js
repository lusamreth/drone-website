import { useState, useEffect } from "react";

export default function Navbar({ children, topStyle }) {
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", stickNavbar);
    return () => {
      window.removeEventListener("scroll", stickNavbar);
    };
  }, [isSticky]);

  const stickyStyle = {
    backgroundColor: "#fff",
    color: isSticky ? "black" : "white",
    boxShadow: "0px 5px 15px #111111",
  };
  const nonstickyStyle = {
    backgroundColor: "#00000000",
  };
  console.log(isSticky ? stickyStyle : nonstickyStyle);
  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 300 ? setSticky((_) => true) : setSticky((_) => false);
    }
  };

  return (
    <div
      className={`reactive-scroll-wrapper`}
      style={isSticky ? stickyStyle : nonstickyStyle}
    >
      {children}
    </div>
  );
}
