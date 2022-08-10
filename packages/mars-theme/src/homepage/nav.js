import { connect, styled, css } from "frontity";
import { Linker } from "./components/misc";
import ExpNav from "./components/exp-sticky";
import tw from "tailwind.macro";
import drone_logo from "../../assets/drone-svgrepo-2.svg";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBezierCurve, faBurger } from "@fortawesome/free-solid-svg-icons";

const Stick = styled("div")`
  ${tw`fixed w-full `}
`;
const Button = styled("button")`
  ${tw`font-mono text-lg bg-blue-300 text-white rounded px-4 py-2 border-none hover:bg-blue-800`};
`;

const Flat = styled("div")`
  ${tw`flex flex-row `}
`;

const MenuItem = styled("p")`
  ${tw`p-4 hover:text-blue-300 hover:underline `}
`;

const Logo = styled("h1")`
  ${tw`px-4 text-white text-3xl font-bold underline`}
`;

const NavbarContainer = styled("div")`
  ${tw`flex flex-row justify-between z-2`}
`;

const side_nav_css = css`
  display: "flex";
  @media (max-width: 720px) {
    display: none;
  }
`;
const brim = css`
  @media (max-width: 720px) {
    width: 100%;
    z-index: 5;
    height: 100vh;
    position: absolute;
    background-color: red;
  }
`;
const brimSub = css`
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    justiy-content: center;
    align-items: center;
    height: 100%;
    background-color: white;
    padding-top: 10rem;
    font-size: 2rem;
  }
`;
const burger_css = css`
  display: none;
  z-index: 5;
  transition: transform 400ms cubic-bezier(0.23, 1, 0.32, 1);
  @media (max-width: 720px) {
    display: block;
    padding: 1rem;
  }
`;

const burger_css_line = css`
  background-color: black;
  margin-top: 5px;
  height: 5px;
  width: 30px;
`;
function Navbar({ state, topStyle }) {
  const [visibleState, setToggleState] = useState(false);
  const toggleBurger = () => {
    if (visibleState !== null) {
      setToggleState((s) => !s);
    } else {
      setToggleState(false);
    }
  };
  return (
    <Stick style={{ zIndex: 500 }}>
      <ExpNav topStyle={topStyle}>
        <NavbarContainer>
          <a href={"/"} className="logo">
            <h1 style={{ paddingLeft: "2rem", fontSize: "2rem" }}>D-RON</h1>
          </a>
          <div
            className="burger-wrapper"
            css={visibleState ? brim : side_nav_css}
          >
            <Flat className="rhs" css={visibleState ? brimSub : side_nav_css}>
              {state.theme.menu.map((item, i) => {
                const name = item[0];
                return (
                  <Linker link={item[1]} key={name + i}>
                    <MenuItem>{name}</MenuItem>
                  </Linker>
                );
              })}
            </Flat>
          </div>
          <div
            className="burger-menu"
            css={burger_css}
            onClick={toggleBurger}
            style={{
              transform: visibleState ? "rotate(405deg)" : "rotate(0deg)",
              padding: visibleState ? "2rem" : "1rem",
            }}
          >
            <div
              className="line1"
              css={burger_css_line}
              style={{
                transform: visibleState ? "rotate(405deg)" : "rotate(0deg)",
              }}
            ></div>
            <div
              className="line2"
              css={burger_css_line}
              style={{
                transform: visibleState ? "translateX(-5px)" : "rotate(0deg)",
              }}
            ></div>
            <div
              className="line3"
              css={burger_css_line}
              style={{
                transform: visibleState ? "rotate(-405deg)" : "rotate(0deg)",
              }}
            ></div>
          </div>
        </NavbarContainer>
      </ExpNav>
    </Stick>
  );
}
// <Link link={link} aria-current={isCurrentPage ? "page" : undefined}>
//   {name}
// </Link>

export default connect(Navbar);
