import { Global, css, connect, styled, Head } from "frontity";
import { Primarybtn, RoundBtnStyle, RoundBtn } from "./components/buttons";
import { LazyBackground } from "./lazybg";
import tw from "tailwind.macro";
import { Center, FlexCol, FlexRow } from "./flex-utils";
import { PrimaryText, SubText } from "./components/texts";
// import ExpNav from "./components/exp-sticky";
import {
  DroneShowcase,
  FeatureShowcasing,
  GeneralShowcase,
  AdvancedFeature,
} from "./showcases";
// import HomepageFooter from "./footer";
import UserReview from "./user_review";
import mountain from "../../assets/mountain-bg.jpg";

const LeftCenter = styled("div")`
  ${tw`flex flex-col justify-center sm:flex-row`}
`;

// display: "flex",
// flexDirection: "column",
// justifyContent: "center",
const Homepage = ({ state }) => {
  return (
    <>
      <div
        className="bau"
        style={{
          position: "relative",
          zIndex: 100,

          width: "100%",
        }}
      >
        <div className="entry">
          <LazyBackground src={mountain} Tag="div">
            <Center
              style={{
                minHeight: "max(max(100vh,80vh),50vh)",
                color: "white",
              }}
            >
              <div
                className="innerBox"
                style={{
                  textAlign: "center",
                  color: "white",
                }}
              >
                <div className="desc">
                  <div
                    css={css`
                      font-size: 3rem;
                      @media (max-width: 720px) {
                        font-size: 2rem;
                      }
                    `}
                  >
                    <h1
                      className="main-title"
                      style={{
                        fontWeight: "bolder",
                        margin: 0,
                        padding: 0,
                        color: "black",
                        filter: "alpha(opacity=50)",
                        opacity: 1,
                      }}
                    >
                      Drone in agriculture
                    </h1>
                  </div>
                  <SubText>
                    Utilizing the best technology offered <br />
                    to power as your farming horse-power
                  </SubText>
                </div>
                <Primarybtn>Get Started</Primarybtn>
              </div>
            </Center>
          </LazyBackground>
        </div>
        <FeatureShowcasing />
        <section
          className="section-group"
          style={{
            backgroundColor: "#111111",
            position: "relative",
            overflow: "hidden",
            paddingBottom: "20%",
            zIndex: -30,
          }}
        >
          <UserReview
            style={{
              zIndex: 5,

              fontSize: "1rem",
            }}
          />

          <div className="big-padding" style={{ height: "250px" }}></div>
          <div
            className="box-stack-layout"
            style={{
              position: "relative",
              overflow: "hidden ",
              height: "100%",
            }}
          >
            <FlexCol
              style={{
                width: "100%",
                alignItems: "start",
                zIndex: 5,
              }}
            >
              <FlexCol
                style={{
                  width: "max(50%,75%)",
                  zIndex: 5,
                  minHeight: "max(50vh,70vh)",
                  backgroundColor: "white",
                  borderRadius: "0 2rem 2rem 0",
                  padding: "2rem",
                  fontSize: "1rem",
                  alignItems: "start",
                }}
              >
                <div
                  className="aimp"
                  style={{ color: "#111111", maxWidth: "80%" }}
                >
                  <PrimaryText>Aimp</PrimaryText>
                  <SubText>babababo</SubText>
                  <p>
                    Amet asperiores dicta error cum itaque saepe, et Aut
                    doloremque voluptates minima molestiae nihil Modi quasi
                    aliquam voluptatem fugit rerum Voluptatum sequi illum a unde
                    iste laborum Consequuntur dolore debitis
                  </p>
                  <br />

                  <SubText>babababo</SubText>
                  <p>
                    Amet asperiores dicta error cum itaque saepe, et Aut
                    doloremque voluptates minima molestiae nihil Modi quasi
                    aliquam voluptatem fugit rerum Voluptatum sequi illum a unde
                    iste laborum Consequuntur dolore debitis
                  </p>
                </div>
              </FlexCol>
            </FlexCol>
          </div>
        </section>
        <AdvancedFeature />
        <GeneralShowcase />
        <DroneShowcase />
        <section className="puff">
          <LazyBackground src={mountain}>
            <LeftCenter
              style={{
                height: "50vh",
                color: "white",
                padding: " 2rem 5rem",
              }}
            >
              <FlexCol>
                <p
                  style={{
                    marginTop: "2rem",
                    fontSize: "1.2rem",
                  }}
                >
                  See our demo units -{">"}
                </p>
                <FlexRow>
                  <h1
                    style={{
                      fontSize: "2rem",
                      backgroundColor: "#5263FA",
                    }}
                  >
                    Request More information
                  </h1>
                  <div style={{ marginLeft: "2rem", fontSize: "2rem" }}>
                    <RoundBtn rad={"3rem"}>GO</RoundBtn>
                  </div>
                </FlexRow>
              </FlexCol>
            </LeftCenter>
          </LazyBackground>
        </section>
      </div>
    </>
  );
};

export default connect(Homepage);
