import { css, connect, styled } from "frontity";
import tw from "tailwind.macro";

const Primarybtn = styled("button")`
  ${tw`rounded bg-green-500 text-white text-md border-none px-6 py-3`}
`;

const RoundBtnStyle = styled("button")`
  ${tw`rounded-full text-white border-none bg-green-500 hover:bg-green-700`}
`;

function RoundBtn(state) {
  const { rad, children, bgcol, col } = state;
  return (
    <RoundBtnStyle
      style={{ width: rad, height: rad, backgroundColor: bgcol, color: col }}
    >
      {children}
    </RoundBtnStyle>
  );
}

export { RoundBtn, Primarybtn, RoundBtnStyle };
