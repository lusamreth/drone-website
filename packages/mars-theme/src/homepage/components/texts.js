import { Global, css, connect, styled, Head } from "frontity";
import tw from "tailwind.macro";

const PrimaryText = styled("h1")`
  ${tw`text-6xl sm:text-4xl`}
`;

const SubText = styled("h1")`
  ${tw`text-3l sm:text-2l`}
`;

const PrimaryTextWhite = styled("h1")`
  ${tw`text-3xl text-white`}
`;

const SecondaryText = styled("p")`
  ${tw`text-xl`}
`;

const MediumText = styled("h1")`
  ${tw`text-4xl sm:text-xl tracking-wider`}
`;
export { PrimaryText, SecondaryText, PrimaryTextWhite, SubText, MediumText };
