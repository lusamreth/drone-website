import { connect, styled, css } from "frontity";
import tw from "tailwind.macro";
import undraw_village from "../../assets/undraw_handcrafts_add_village.svg";
import {
  ParallaxBackground,
  MainPage,
  SplitGridComp,
  Center,
} from "./flex-utils";
import { Primarybtn } from "./components/buttons";
import business_chat from "../../assets/undraw_business_chat.svg";
import business_2 from "../../assets/undraw_solution_mindse.svg";
// import mountain from "../../assets/falling-pink-sakura.jpg";

const b = css`
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr));
`;

import {
  faFacebook,
  faGithub,
  faGoogle,
  faLinkedin,
  faFedora,
  faUber,
  faAws,
  faMicrosoft,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const partners = [
  {
    id: 1,
    icon: faFacebook,
  },
  {
    id: 2,
    icon: faGithub,
  },
  {
    id: 3,
    icon: faGoogle,
  },
  {
    id: 4,
    icon: faLinkedin,
  },
  {
    id: 5,
    icon: faFedora,
  },
  {
    id: 6,
    icon: faUber,
  },

  {
    id: 7,
    icon: faMicrosoft,
  },

  {
    id: 8,
    icon: faAws,
  },
];

// <h1 style={{ fontSize: "4rem" }}>Pleasure to work with!</h1>
function PartnerPage(state) {
  return (
    <MainPage className="main-root">
      <div
        className="main-root-container"
        style={{
          padding: "5%",
          // marginBottom: "10%",
        }}
      >
        <div
          className="partners"
          style={{
            display: "grid",
            placeItems: "center",
            alignContent: "center",
            minHeight: "80vh",
          }}
          css={css`
            @media (max-width: 720px) {
              padding-top: 4rem;
            }
          `}
        >
          <SplitGridComp>
            <div className="partner-desc" style={{ minWidth: "250px" }}>
              <h1>our partners are some of the best</h1>
              <h1 style={{ fontSize: "4rem" }}>Pleasure to work with!</h1>{" "}
              <br />
              <div className="desc">
                <p>
                  Sit dolorum dolor laborum atque consectetur Esse doloremque
                  aliquam tempora eveniet vitae facere praesentium Harum ipsum
                  rerum atque consequatur hic? Odio illo <br />
                  quam aliquam quos est! In sint ipsa optio
                </p>
                <br />

                <Primarybtn>Learn more</Primarybtn>
              </div>
            </div>
            <div className="p-group" styles={b}>
              {partners.map((partner) => {
                return (
                  <FontAwesomeIcon
                    icon={partner.icon}
                    fontSize="5rem"
                    style={{
                      padding: "2rem",
                    }}
                  />
                );
              })}
            </div>
          </SplitGridComp>
        </div>
        <Buybu />
      </div>
      <BusinessSup />
      <PartnerFooter />
      <Cfa />
    </MainPage>
  );
}

// grid-template-rows: repeat(6, 1fr);
const B_style = css`
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 1/2fr 1fr max-content;
  overflow: hidden;
  padding: 5rem 4rem;
  min-height: 100vh;
  font-size: 1.2rem;
  @media (max-width: 720px) {
    display: flex;
    flex-direction: column;
    font-size: 1rem;
    padding: 2rem;
  }
`;

const span1 = css`
  grid-column: 4/10;
  grid-row: 1/2;
  min-width: 250px;
  height: max(90%, 200px);
  margin-bottom: 2rem;
`;
const span2 = css`
  grid-column: 6/12;
  display: flex;
  flex-direction: column;
  grid-gap: 10%;
`;

const span3 = css`
  grid-column: 2/8;
`;
// box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
const CmtStyle = styled("div")`
  background-color: red;

  box-shadow: 0 2px 10px -1px rgb(0 0 0 / 0.5), 0 2px 4px -2px rgb(0 0 0 / 0.5);
  ${tw`p-10 rounded-lg bg-indigo-400 text-white`},
`;

// mobile={{
//   display: "flex",
//   flexDirection: "column",
//   fontSize: "1rem",
//   padding: "2rem",
// }}
function BusinessSup(state) {
  return (
    <div className="root">
      <div className="bubu" css={B_style}>
        <CmtStyle className="cmt-1" css={span1}>
          <h1>This is awesome blah blah</h1>
          <p>
            Adipisicing earum consequatur consectetur debitis amet, eius. A
            autem accusamus reprehenderit voluptatibus exercitationem! Aut et
            iusto
          </p>
        </CmtStyle>
        <div css={span2}>
          <CmtStyle className="cmt-2" style={{ maxWidth: "600px" }}>
            <h1>This is awesome blah blah</h1>
            <p>
              Adipisicing earum consequatur consectetur debitis amet, eius. A
              autem accusamus reprehenderit voluptatibus exercitationem! Aut et
              iusto
            </p>
          </CmtStyle>
          <img
            src={business_chat}
            alt="bccccc"
            width="100%"
            style={{ minWidth: "320px", padding: "2rem" }}
          />
        </div>

        <CmtStyle className="cmt-1" css={span3}>
          <h1>This is awesome blah blah</h1>
          <p>
            Adipisicing earum consequatur consectetur debitis amet, eius. A
            autem accusamus reprehenderit voluptatibus exercitationem! Aut et
            iusto
          </p>
        </CmtStyle>
      </div>
    </div>
  );
}

function Buybu(_) {
  return (
    <div
      className="root"
      style={{
        minHeight: "50vh",
        color: "white",
        borderRadius: "2rem",
      }}
    >
      <ParallaxBackground
        style={{
          opacity: 0.8,
          height: "100%",
        }}
      >
        <div
          className="text"
          style={{
            height: "100%",
            padding: "5rem 3rem",
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div
            className="innertext"
            style={{ padding: "1rem 0", maxWidth: "650px" }}
          >
            <h1>We promote growth and innovation </h1>
            <br />

            <p>
              Adipisicing laudantium provident quos modi error! Placeat iusto
              <br />
              ipsum officiis voluptatibus in. Nihil voluptate quam aliquid enim
              <br />
              obcaecati eaque Iure ipsa veniam non nemo quae rerum magnam
              quaerat velit quam!
            </p>
            <div
              style={{ borderTop: "1px solid white", maxWidth: "30%" }}
            ></div>
            <p>
              ipsum officiis voluptatibus in. Nihil voluptate quam aliquid enim
              quaerat velit quam!
              <br />a eaque modi aliquam dicta. obcaecati doloribus amet Ad
              beatae cumque
              <br />
              quasi animi repudiandae aliquam?
            </p>
          </div>
          <Primarybtn>Learn more</Primarybtn>
        </div>
      </ParallaxBackground>
    </div>
  );
}

function PartnerFooter() {
  return (
    <div
      className="pf-root"
      style={{
        minHeight: "50vh",
        color: "white",
        overflow: "hidden",
        zIndex: -100,
        display: "grid",
        placeItems: "center",
      }}
    >
      <ParallaxBackground
        style={{
          width: "100%",
          opacity: 0.8,
          height: "100%",
        }}
      >
        <Center
          style={{
            height: "100%",
            padding: "2rem",
            background: "rgba(0, 0, 0, 0.6)",
          }}
        >
          <div className="bum">
            <p>
              Ipsum pariatur laborum cum at aliquid Aliquam ipsa quia cupiditate
              dignissimos
            </p>
          </div>
        </Center>
      </ParallaxBackground>
    </div>
  );
}

function Cfa_cmt({ children, style }) {
  return (
    <div
      className="bb"
      style={{
        border: "1px solid black",
        padding: "1.5rem",
        height: "max(200px, 320px)",
        borderRadius: "1rem",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

// call for action
function Cfa(state) {
  return (
    <Center
      className="cfa-root"
      style={{
        padding: "10%",
      }}
    >
      <SplitGridComp>
        <div className="bruh">
          <img src={undraw_village} alt="villg" width="100%" />
          <Cfa_cmt style={{ marginTop: "-3rem" }}>
            <h1>Looking forward !</h1>
            <p>
              Sit porro et illum maiores ea. Cum expedita voluptatem fuga
              provident necessitatibus qui velit Eos iste debitis velit
              excepturi provident. Neque placeat repudiandae labore quas fuga,
              eligendi porro. Alias possimus
            </p>
          </Cfa_cmt>
        </div>
        <Cfa_cmt style={{ marginTop: "3rem" }}>
          <h1>Join us in this journey</h1>
          <p>
            Amet reprehenderit tempora provident tempora quod Voluptatibus quia
            aut vero porro eligendi ullam. Quo esse alias eum qui qui! Sequi
          </p>
          <Primarybtn>Sign up</Primarybtn>
        </Cfa_cmt>
      </SplitGridComp>
    </Center>
  );
}

// <div
//   style={{
//     display: "flex",
//     justifyContent: "end",
//     alignItems: "end",
//   }}
// >
//   <p
//     style={{
//       writingMode: "vertical-lr",
//       textOrientation: "upright",
//       letterSpacing: "5px",
//       marginRight: "-1rem",
//     }}
//   >
//     evolve
//   </p>
// </div>
export { PartnerPage };
