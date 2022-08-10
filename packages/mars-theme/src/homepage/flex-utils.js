import { css, connect, styled } from "frontity";
import tw from "tailwind.macro";
import mountain from "../../assets/mountain-bg.jpg";

const Center = styled("div")`
  ${tw`flex justify-center flex-column items-center`}
`;

const FlexRow = styled("div")`
  ${tw`flex flex-row items-center sm:flex-col sm:items-start`}
`;

const FlexCol = styled("div")`
  ${tw`flex flex-col justify-center`}
`;

const GridCenter = ({ children, style }) => {
  const grid_center_css = css`
    display: grid;
    place-items: center;
    min-height: 100vh;
  `;
  return (
    <div className="grid-center" style={style} css={grid_center_css}>
      {children}
    </div>
  );
};

const CenterFlexCss = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: "center";
`;
const CenterRowFlexCss = css`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: "center";
`;

function MainPage({ children }) {
  return (
    <div className="root-wrap">
      <div className="main">{children}</div>
    </div>
  );
}

function SplitGridComp({ children, minWidth }) {
  const mw = minWidth || "250px";
  const Grid = css`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(${mw}, 1fr));
    grid-gap: 1rem;
    @media (max-width: 720px) {
      ${CenterFlexCss.styles}
    }
  `;

  return (
    <div className="split" css={Grid}>
      {children}
    </div>
  );
}

function ParallaxBackground(state) {
  const { bg_img, children, style } = state;
  // background-position: "center";
  // background-size: "cover";
  // background-repeat: "no-repeat";
  // background-attachment: "fixed";

  return (
    <div
      className="parallax-bg"
      style={{
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundImage: `url(${bg_img || mountain})`,
        backgroundAttachment: "fixed",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

export {
  Center,
  FlexRow,
  FlexCol,
  SplitGridComp,
  ParallaxBackground,
  MainPage,
  GridCenter,
  CenterFlexCss as CenterColFlexCss,
  CenterRowFlexCss,
};
