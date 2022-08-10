import { Center, FlexCol, FlexRow } from "./flex-utils";
import { RoundBtn, Primarybtn } from "./components/buttons";
import { SubText } from "./components/texts";
import { useState, useEffect, useRef } from "react";
import wave from "../../assets/layered-waves.png";

import { styled, css } from "frontity";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import tw from "tailwind.macro";

const social_content = [
  { icon: faFacebook, link: "/facebook" },
  { icon: faGithub, link: "/github" },
  { icon: faLinkedin, link: "/linkedin" },
  { icon: faGoogle, link: "/google" },
];

function HomepageFooter(state) {
  return (
    <footer
      style={{
        position: "relative",
        bottom: 0,
        width: "100%",
        display: "flex",
        flexDirection: "column",
        boxShadow: "0 5px 10px #111111",
      }}
    >
      <FlexRow
        style={{
          padding: "4rem",
          justifyContent: "space-between",
          height: "100%",
          backgroundColor: "#ffffff",
        }}
      >
        <div
          className="ft-lhs"
          id="fttb"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            marginRight: "2rem",
            zIndex: 5,
          }}
        >
          <div className="newsletter">
            <SubText>Find out more About drone with our newsletter</SubText>
            <FlexRow
              style={{
                margin: "2rem 0 ",
              }}
            >
              <input
                type="text"
                placeholder="example@gmail.com"
                style={{
                  padding: "1rem",
                  marginRight: "0.75rem",
                  border: "none",
                  boxShadow: "1px 1px 3px #111111",
                }}
              />
              <Primarybtn
                style={{ padding: "0.75rem" }}
                css={css`
                  @media (max-width: 720px) {
                    margin-top: 1rem;
                  }
                `}
              >
                Search
              </Primarybtn>
            </FlexRow>
          </div>
          <div className="support">
            <h2 style={{ marginBottom: "-0.1rem" }}>Support</h2>
            <FlexRow>
              <div className="lhs" style={{ marginRight: "1rem" }}>
                <p>0218102020</p>
                <p>coo@gmail.com</p>
                <a href="/help">Help</a>
              </div>

              <div className="rhs">
                <a href="/international">International</a>
                <br />
                <br />

                <a href="/billing">billing-info</a>
              </div>
            </FlexRow>
          </div>
        </div>
        <div
          className="ft-rhs"
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <FlexCol>
            <p>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical
            </p>
            <p>-----{`>`} Visit our station</p>
          </FlexCol>
          <div
            className="btm"
            style={{
              zIndex: 5,
            }}
          >
            <SubText>Author : Lu Samreth</SubText>
            <p>Technology use: </p>
            <p>frontity(headless wordpress), React, tailwindcss</p>
            <div
              className="icon-list"
              style={{
                display: "flex",
                flexDirection: "row",
                gap: "10px",
                margin: "2rem 0 ",
              }}
            >
              {social_content.map((ctn, i) => {
                return (
                  <RoundBtn rad="3rem" bgcol="black" key={i}>
                    <a href={ctn.link}>
                      <FontAwesomeIcon
                        icon={ctn.icon}
                        fontSize="2rem"
                      ></FontAwesomeIcon>
                    </a>
                  </RoundBtn>
                );
              })}
            </div>
            <a href="">Source code</a>
          </div>
        </div>
      </FlexRow>
      <div>
        <WaveWrapper>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#6451FA"
              fillOpacity="1"
              d="M0,96L48,106.7C96,117,192,139,288,176C384,213,480,267,576,277.3C672,288,768,256,864,245.3C960,235,1056,245,1152,245.3C1248,245,1344,235,1392,229.3L1440,224L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </WaveWrapper>
      </div>
    </footer>
  );
}

const WaveWrapper = styled("div")`
  ${tw`absolute z-1 top-2/4 bottom-0 w-full`}
`;
export default HomepageFooter;
