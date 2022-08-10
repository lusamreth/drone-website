import { Global, css, connect, styled, Head } from "frontity";
import tw from "tailwind.macro";
import { PrimaryText } from "./components/texts";
import bg from "../../assets/mountain-bg.jpg";

const GroupUser = styled("div")`
  ${tw`flex flex-row md:w-full sm:flex-col md:flex-col`}
`;

const CardBoxStyle = styled("div")`
  ${tw`bg-green-500 p-5 m-5 rounded-lg flex flex-col justify-between sm:p-2`}
`;

const users = [
  {
    name: "bbaeboeey",
    role: "chef",
  },
  {
    name: "bbaeboeey",
    role: "chef",
  },
  {
    name: "USBA",
    role: "chef",
  },
  {
    name: "bruh",
    role: "band",
  },
];

const CustomerWrapper = styled("div")`
  ${tw`xl:w-4/5 p-6 mx-20 sm:m-0 `}
`;

function UserReview(state) {
  return (
    <section
      style={{
        backgroundColor: "#111111",
        color: "white",
        overflow: "hidden",
      }}
    >
      <CustomerWrapper>
        <PrimaryText>See What our customers are saying</PrimaryText>
        <p>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in <br /> a piece of classical Latin literature from 45 BC,
          making it over 2000 years old.
        </p>
        <br />
        <div
          className="griddy"
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fill,minmax(min(100%,500px),1fr))",
          }}
        >
          {users.map((user, i) => {
            return <CardBox name={user.name} role={user.role} key={i} />;
          })}
        </div>
      </CustomerWrapper>
    </section>
  );
}

function CardBox(state) {
  const { name, role } = state;
  return (
    <CardBoxStyle
      style={{
        maxHeight: "100%",
        padding: "2rem",
      }}
    >
      <div className="header-sec">
        <div
          style={{
            backgroundImage: `url(${bg})`,
            width: "50px",
            height: "50px",
            borderRadius: "50%",
          }}
        ></div>
        <h1>{name}</h1>
      </div>

      <div
        className="cardbox-content"
        style={{
          paddingTop: "2rem",
        }}
      >
        <p>
          Lorem Ipsum is simply industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500s{" "}
        </p>

        <p>{role}</p>
      </div>
    </CardBoxStyle>
  );
}

export default connect(UserReview);
