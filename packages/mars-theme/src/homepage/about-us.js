import { connect, styled, css } from "frontity";
import tw from "tailwind.macro";

import {
  Center,
  SplitGridComp,
  MainPage,
  CenterRowFlexCss,
} from "./flex-utils";
import drone_gif from "../../assets/drone_weeb.png";
import undraw_handcrafts_growth from "../../assets/undraw_handcrafts_growth.svg";
import undraw_handcrafts_briefcase from "../../assets/undraw_handcrafts_briefcase.svg";
import undraw_handcrafts_cat from "../../assets/undraw_handcrafts_cat.svg";
import hp_founder from "../../assets/hp_founder.jpg";

function Cfa_cmt({ children, style }) {
  return (
    <div
      className="bb"
      style={{
        padding: "1.5rem",
        margin: "0 1rem",
        borderRadius: "1rem",
        boxShadow: "0 2px 10px #111111",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

function AboutUsPage(state) {
  return (
    <MainPage>
      <div
        className="our-story"
        style={{
          minHeight: "50vh",
          color: "#212a2f",
        }}
      >
        <Center style={{ flexDirection: "column", justifyContent: "start" }}>
          <h1>
            <u>Our story</u>
          </h1>
          <div className="empty" style={{ minHeight: "150px" }}></div>
          <div className="story-desc">
            <SplitGridComp
              style={{ padding: "1rem", minWidth: "400px" }}
              minWidth="400px"
            >
              <div
                className="wrapper"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  margin: "4rem",
                  minWidth: "170px",
                  maxWidth: "400px",
                }}
              >
                <img
                  src={undraw_handcrafts_growth}
                  alt=""
                  width="100%"
                  style={{
                    boxShadow: "0 2px 10px #111111",
                    borderRadius: "10%",
                    padding: "2rem",
                  }}
                />
              </div>
              <Cfa_cmt
                style={{
                  maxWidth: "450px",
                  height: "min(100%,350px)",
                }}
              >
                <h1>We start with incredible endurance</h1>
                <p>
                  Consectetur quo fuga amet doloribus ab. Odio commodi ut dolore
                  eveniet eius dicta vero Suscipit iure nihil dolor temporibus
                </p>
                <br />
              </Cfa_cmt>
              <br />

              <Cfa_cmt style={{ marginTop: "10%", gridColumn: "1/2" }}>
                <h1>We start with incredible endurance</h1>
                <p>
                  Consectetur quo fuga amet doloribus ab. Odio commodi ut dolore
                  eveniet eius dicta vero Suscipit iure nihil dolor temporibus
                </p>
                <br />
              </Cfa_cmt>
            </SplitGridComp>
          </div>
        </Center>
      </div>
      <Center
        style={{
          flexDirection: "column",
          justifyContent: "start",
          padding: "3rem",
        }}
      >
        <div
          className="quoting"
          style={{
            maxWidth: "1150px",
            fontSize: "1.5rem",
            marginTop: "100px",
            color: "#212a2f",
          }}
        >
          <h1>Meet our founders</h1>
          <h2>"The quest for perfection"</h2>

          <p>
            "Adipisicing sit perferendis vitae ex eligendi. Quis reiciendis
            similique incidunt pariatur consequuntur error? Natus dolores animi
            ad facilis, veniam, aspernatur omnis?" ad facilis, veniam,
            aspernatur omnis?" ad facilis, veniam, aspernatur omnis?"
          </p>
          <br />

          <img src={hp_founder} alt="hpfd" width="100%" />
          <br />

          <h2>"With great complexity great a simplicity emerged"</h2>
          <p>
            modi soluta dolore Itaque eligendi corporis doloribus ducimus rem ad
            facilis, veniam, aspernatur omnis?" ad facilis, veniam, aspernatur
            omnis?" ad facilis, veniam, aspernatur omnis?" modi soluta dolore
            Itaque eligendi corporis doloribus ducimus rem ad facilis, veniam,
            aspernatur omnis?" ad facilis, veniam, aspernatur omnis?" ad
            facilis, veniam, aspernatur omnis?"
          </p>
          <p>
            modi soluta dolore Itaque eligendi corporis doloribus ducimus rem ad
            facilis, veniam, aspernatur omnis?" ad facilis, veniam, aspernatur
            omnis?" ad facilis, veniam, aspernatur omnis?" modi soluta dolore
            Itaque eligendi corporis doloribus ducimus rem ad facilis, veniam,
            aspernatur omnis?" ad facilis, veniam, aspernatur omnis?" ad
            facilis, veniam, aspernatur omnis?"
          </p>
        </div>
      </Center>
      <DroneShowcase />
      <FinalExpo />
    </MainPage>
  );
}

//<div className="show-desc" css={show_desc_css}>
function DroneShowcase({ state }) {
  const show_desc_css = css`
    display: "flex";
    flex-direction: "row";
    justify-content: "center";
    @media (max-width: 720px) {
      flex-direction: "column";
      margin-top: 3rem;
      background-color: "red";
    }
  `;
  return (
    <Center
      style={{
        color: "#212a2f",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        marginTop: "100px",
        minHeight: "30vh",
      }}
    >
      <div
        className="pale-bg"
        style={{
          backgroundColor: "#d8c7c3",
          minWidth: "50%",
          margin: "0 10%",
        }}
      >
        <Center
          className="proto"
          style={{
            flexDirection: "column",
            fontSize: "1.2rem",
            padding: "2rem",
          }}
        >
          <img
            src={drone_gif}
            alt=""
            style={{
              display: "block",
              width: "90%",
              maxWidth: "550px",
            }}
          />
          <SplitGridComp>
            <div className="each" style={{ margin: "1rem" }}>
              <h1>Simplicity in design</h1>
              <p>
                No flashy logos. No senseless details. Just the world’s most
                comfortable shoes, made naturally and designed practically. It’s
                that simple. facilis,
              </p>
            </div>
            <div className="each" style={{ margin: "1rem" }}>
              <h1>Simplicity in design</h1>
              <p style={{ fontSize: "1.2rem" }}>
                No flashy logos. No senseless details. Just the world’s most
                comfortable shoes, made naturally and designed practically. It’s
                that simple. facilis,
              </p>
            </div>
            <div className="each" style={{ margin: "1rem" }}>
              <h1>Simplicity in design</h1>
              <p style={{ fontSize: "1.2rem" }}>
                No flashy logos. No senseless details. Just the world’s most
                comfortable shoes, made naturally and designed practically. It’s
                that simple. facilis,
              </p>
            </div>
          </SplitGridComp>
        </Center>
      </div>
    </Center>
  );
}

function FinalExpo(state) {
  return (
    <Center
      style={{
        color: "#212a2f",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: "1rem",
        minHeight: "30vh",
      }}
    >
      <div
        style={{
          maxWidth: "80%",
        }}
      >
        <SplitGridComp>
          <div className="each" style={{ margin: "3rem" }}>
            <img
              src={undraw_handcrafts_growth}
              alt=""
              style={{
                maxHeight: "300px",
                border: "2px dotted black",
                width: "100%",
                padding: "1.3rem",
                borderRadius: "0.5rem",
              }}
            />
            <h1>Simplicity in design</h1>
            <p>
              No flashy logos. No senseless details. Just the world’s most
              comfortable shoes, made naturally and designed practically. It’s
              that simple. facilis,
            </p>
          </div>
          <div className="each" style={{ margin: "3rem" }}>
            <img
              src={undraw_handcrafts_briefcase}
              alt=""
              style={{
                maxHeight: "300px",
                border: "2px dotted black",
                width: "100%",
                padding: "1.3rem",
                borderRadius: "0.5rem",
              }}
            />
            <h1>Ok so it briefcase</h1>
            <p>
              No flashy logos. No senseless details. Just the world’s most
              comfortable shoes, made naturally and designed practically. It’s
              that simple. facilis,
            </p>
          </div>

          <div className="each" style={{ margin: "3rem" }}>
            <img
              src={undraw_handcrafts_cat}
              alt=""
              style={{
                maxHeight: "300px",
                border: "2px dotted black",
                width: "100%",
                padding: "1.3rem",
                borderRadius: "0.5rem",
              }}
            />
            <h1>Cat? anyone?</h1>
            <p>
              No flashy logos. No senseless details. Just the world’s most
              comfortable shoes, made naturally and designed practically. It’s
              that simple. facilis,
            </p>
          </div>
        </SplitGridComp>
      </div>
    </Center>
  );
}

export default AboutUsPage;
