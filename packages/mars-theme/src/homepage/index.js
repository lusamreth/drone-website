import { Global, css, connect, styled, Head } from "frontity";
import Switch from "@frontity/components/switch";
import { Primarybtn, RoundBtnStyle, RoundBtn } from "./components/buttons";
import { PartnerPage } from "./partners";
import HomepageFooter from "./footer";
import AboutUs from "./about-us";
import { useState } from "react";
import PageError from "./errorpage";
import Navbar from "./nav";
import { FlexCol, FlexRow } from "./flex-utils";
import { LazyBackground } from "./lazybg";
import tw from "tailwind.macro";
import Homepage from "./home";
import ContactPage from "./contact";
// font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
//   "Droid Sans", "Helvetica Neue", Helvetica, Arial, sans-serif;
const globalStyles = css`
  * {
    font-family: "Inter";
    box-sizing: border-box;
  }
  ,
  body {
    margin: 0;
  }
  a,
  a:visited {
    color: inherit;
    text-decoration: none;
  }
  .heading-title,
  .subheading {
    color: white;
  }
  .heading-title {
    font-size: 2rem;
  }

  .subheading {
    font-size: 1rem;
  }
  .footer-overlap {
    position: relative;
    z-index: 100;
  }

  @media only screen and (max-width: 600px) {
    p {
      font-size: 0.8em;
    }
    h1 {
      font-size: 1.2em;
    }
    footer {
      flexdirection: "column";
    }
  }
`;
// const Bg = styled("div")`
//   ${tw`h-screen`}
// `;

const Stick = styled("div")`
  ${tw`fixed w-full z-100`}
`;

const LeftCenter = styled("div")`
  ${tw`flex flex-col justify-center sm:flex-row`}
`;
const footer_space = (state) => {
  return <div style={{ minHeight: "40vh" }}></div>;
};
// display: "flex",
// flexDirection: "column",
// justifyContent: "center",
const Theme = ({ state }) => {
  const slug_url = state.router.link;
  const data = state.source.get(state.router.link);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Inter"
          rel="stylesheet"
        />
      </Head>
      <Navbar
        topStyle={
          slug_url === "/"
            ? {
                color: "white",
              }
            : { color: "black" }
        }
      />
      <div
        className="empty"
        style={{ height: slug_url !== "/" ? "40px" : "0" }}
      ></div>
      <Global styles={globalStyles} />
      <Switch>
        <Homepage when={slug_url == "/"} />
        <ContactPage when={slug_url == "/contact-page/"} />
        <PartnerPage when={slug_url == "/partners/"} />
        <AboutUs when={slug_url == "/about-us/"} />
        <PageError when={data.isError} />
      </Switch>
      <HomepageFooter />
    </>
  );
};
// <Homepage when={slug_url == "/"} />
// <ContactPage when={slug_url == "/contact-page/"} />
// <PartnerPage when={slug_url == "/partners/"} />

export default connect(Theme);
