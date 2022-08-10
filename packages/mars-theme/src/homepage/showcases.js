import { Global, css, connect, styled, Head } from "frontity";
import tw from "tailwind.macro";
import pingwing_png from "../../assets/pngwing.com.png";
import { Primarybtn, RoundBtnStyle, RoundBtn } from "./components/buttons";
import {
  PrimaryText,
  SubText,
  SecondaryText,
  MediumText,
} from "./components/texts";
import djiDrone from "../../assets/dji-drone.jpg";
import drone_h2 from "../../assets/drone_weeb.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCodeFork,
  faCodeMerge,
  faSignal,
} from "@fortawesome/free-solid-svg-icons";
import circle_scatter from "../../assets/circle-scatter-haikei.svg";
import {
  Center,
  FlexCol,
  FlexRow,
  SplitGridComp,
  CenterColFlexCss,
} from "./flex-utils";
function GeneralShowcase(state) {
  return (
    <section
      className="general-showcasing"
      style={{
        background: `url(${circle_scatter}) no-repeat`,
        backgroundSize: "cover",
      }}
    >
      <SplitGridComp minWidth="450px">
        <div
          className="gn-desc"
          style={{
            padding: "2rem",
            color: "white",
            width: "min(600px,100%)",
            alignSelf: "center",
            placeSelf: "center",
          }}
        >
          <div>
            <PrimaryText>Best in Class!</PrimaryText>
            <p>
              Elit quasi excepturi eveniet esse magnam Suscipit nihil facere
              incidunt repellat eum voluptatem libero <br />
              facilis similique Adipisci veritatis magnam quibusdam aliquam.
              Elit quasi excepturi eveniet esse magnam Suscipit nihil facere
              facilis similique Adipisci veritatis magnam quibusdam aliquam.
            </p>
          </div>
        </div>
        <div
          className="drone_img_container"
          style={{
            margin: "8rem 2rem",
          }}
        >
          <img src={djiDrone} width="100%" alt="ooo" />
        </div>
      </SplitGridComp>
    </section>
  );
}

function DroneShowcase(state) {
  return (
    <DroneWrapper
      className="drone-showcasing"
      style={{
        width: "100%",
        minHeight: "100vh",
        scrollSnapType: "y mandatory",
        backgroundColor: "#fff",
      }}
    >
      <div
        style={{
          width: "100%",
          display: "grid",
          alignItems: "center",
          justifyItems: "center",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,350px),1fr))",
          gridAutoFlow: "row",
        }}
      >
        <div
          className="dron-lhs"
          style={{ maxWidth: "250px", marginBottom: "50px" }}
          css={css`
            @media (max-width: 720px) {
              padding-top: 2rem;
              ${CenterColFlexCss.styles}
            }
          `}
        >
          <p>
            Drone in agriculure is the future forward! Utilizing the best
            technology that is currently offered.
          </p>
          <br />

          <Primarybtn>Join Us</Primarybtn>
        </div>
        <Center
          style={{
            justifyContent: "center",
            margin: "0 2rem",
          }}
        >
          <FlexCol
            style={{
              alignItems: "center",
              maxWidth: "550px",
              height: "100%",
            }}
          >
            <Vl height="150px" w="2" />
            <img
              src={pingwing_png}
              alt="pingwing"
              width="100%"
              style={{
                filter: "drop-shadow(10px 10px 7px #111111)",
                padding: "1rem",
              }}
            />
            <Vl height="150px" w="2" />
          </FlexCol>
        </Center>

        <div className="dron-lhs" style={{ maxWidth: "250px" }}>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
          </p>
        </div>
      </div>
    </DroneWrapper>
  );
}
const VlWrapper = styled("div")`
  ${tw`sm:hidden sm:h-0`}
`;

function Vl(state) {
  return (
    <VlWrapper>
      <div
        className="vl"
        style={{
          borderLeft: `${state.w || 6}px solid ${state.color || "black"} `,
          height: state.height,
        }}
      ></div>
    </VlWrapper>
  );
}

const DroneWrapper = styled("div")`
  ${tw`sm:p-0 py-20`}
`;

const features = [
  {
    id: 1,
    icon: faSignal,
    feat: "Dolor porro enim consequuntur illo recusandae! iet vero",
  },
  {
    id: 2,
    icon: faCodeMerge,
    feat: "Dolor porro enim consequuntur illo recusandae! iet vero",
  },
  {
    id: 3,
    icon: faCodeFork,
    feat: "aspernatur voluptatem. Autem earum veniam eveniet vero",
  },
];

const FeatureWrapper = styled("div")`
  ${tw`flex flex-row p-4 sm:flex-col md:flex-col items-center justify-center`}
`;
function FeatureShowcasing(state) {
  return (
    <section
      className="feature showcasing"
      style={{
        padding: "4rem",
        backgroundColor: "white",
      }}
    >
      <h1 style={{ textAlign: "center", fontSize: "2rem" }}>
        See the advantages
      </h1>
      <FeatureWrapper>
        {features.map((feature) => {
          const { icon, feat, id } = feature;
          return (
            <FlexCol
              className="feature-1"
              key={id}
              style={{
                maxHeight: "400px",
                alignItems: "center",
                margin: "0 3rem",
                padding: "2rem",
              }}
            >
              <FontAwesomeIcon
                icon={icon}
                style={{
                  fontSize: "5rem",
                }}
              />
              <div
                className="show-desc"
                style={{ textAlign: "center", paddingTop: "1rem" }}
              >
                <SubText>Feat{id}</SubText>
                <p style={{ fontSize: "1.2rem" }}>{feat}</p>
              </div>
            </FlexCol>
          );
        })}
      </FeatureWrapper>
    </section>
  );
}

const AdvWrapper = styled("div")`
  ${tw`flex items-center p-5 sm:flex-col`}
`;
function AdvancedFeature(state) {
  return (
    <div
      className="bob"
      style={{
        backgroundColor: "#111111",
        color: "white",
        minHeight: "80vh",
      }}
    >
      <AdvWrapper>
        <VlWrapper>
          <p
            className="side-note"
            style={{
              writingMode: "vertical-rl",
              textOrientation: "mixed",
              letterSpacing: "5px",
            }}
          >
            Drone farming
          </p>
        </VlWrapper>
        <div className="depiction" style={{ margin: "0 6rem", width: "100%" }}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit,minmax(max(50% ,min(350px, 100%)),1fr))",
            }}
          >
            <div className="desc">
              <MediumText>See what the best can do</MediumText>
              <SecondaryText>
                Consectetur dicta distinctio a possimus nam minus magnam a! Ea
                repudiandae quisquam molestias. eveniet sapiente eligendi
                voluptas qui Ipsum similique ea?
              </SecondaryText>
              <br />

              <div className="drone-range">
                <h1>Range</h1>
                <div
                  className="pi"
                  style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit,minmax(100px ,1fr))",
                    maxWidth: "500px",
                  }}
                >
                  <SecondaryText>100 m²</SecondaryText>
                  <SecondaryText>300 m²</SecondaryText>
                  <SecondaryText>600 m²</SecondaryText>
                  <SecondaryText>1000 m²</SecondaryText>
                </div>
              </div>
            </div>
            <div
              className="img-drone"
              style={{ maxWidth: "750px", marginTop: "2rem" }}
            >
              <img
                src={drone_h2}
                alt="drone_h2"
                width="100%"
                style={{ filter: "drop-shadow(10px 2px 2px #111111)" }}
              />
            </div>
          </div>
        </div>
      </AdvWrapper>
    </div>
  );
}
export { GeneralShowcase, DroneShowcase, FeatureShowcasing, AdvancedFeature };
