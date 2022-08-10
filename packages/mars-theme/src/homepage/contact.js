import { connect, styled, css } from "frontity";
import tw from "tailwind.macro";
import { FlexRow, SplitGridComp, MainPage } from "./flex-utils";
import { useState, useEffect } from "react";
import { CustomInput, TextAreaCustom } from "./components/inputs";
import { Primarybtn } from "./components/buttons";

const QuestionList = [
  {
    id: 1,
    question: "How can i request the price?",
  },

  {
    id: 2,
    question: "How long have your team been operating?",
  },

  {
    id: 3,
    question: "What kind of business can drone be useful other than farming?",
  },

  {
    id: 4,
    question: "How long can the drone operate on the field?",
  },

  {
    id: 5,
    question:
      "Do you need to buy seperate controllers and screens for the drone?",
  },
];

const input_fields = ["name", "email", "telephone"];

// css={css`
//              padding: 2rem 3rem;
//              @media (max-width: 720px) {
//                padding: 1rem 0rem;
//              }
//            `}
function ContactPage(state) {
  const ql = QuestionList.map((q) => {
    return {
      id: q.id,
      isHidden: true,
      question: q.question,
    };
  });

  const [isHiddenList, setHiddenList] = useState(ql);

  const toggleHidden = (e) => {
    setHiddenList((list) => {
      return list.map((q) => {
        if (q.id == e.target.id) {
          q.isHidden = !q.isHidden;
        }
        return q;
      });
    });
  };

  return (
    <MainPage>
      <div
        className="question-section"
        style={{
          minHeight: "120vh",
          display: "flex",
          margin: "5rem 2rem 0 2rem",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "1rem",
        }}
      >
        <h1>You've got questions. We got answers on anything drone :D</h1>
        <h2>Common questions</h2>
        {isHiddenList.map((q) => {
          return (
            <div
              className="question-field"
              key={q.id}
              style={{
                color: "white",
                padding: "1rem",
                border: "1px solid black",
                width: "max(250px,50%)",
                borderRadius: "1rem",
                margin: "1rem",
                backgroundColor: "#D64842",
              }}
              css={css`
                @media (max-width: 720px) {
                  h2 {
                    font-size: 0.75rem;
                  }
                }
              `}
            >
              <FlexRow
                style={{
                  gap: "20px",
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <h2>{q.question}</h2>
                <button
                  style={{
                    fontSize: "1.5rem",
                    padding: ".5rem 1rem",
                    backgroundColor: "#111111",
                    color: "#fff",
                    borderRadius: "0.5rem",
                    border: "none",
                  }}
                  id={q.id}
                  onClick={toggleHidden}
                >
                  +
                </button>
              </FlexRow>
              {!q.isHidden ? (
                <p>
                  Lorem laborum recusandae cupiditate deserunt dolorem. Facilis
                  ullam dolor maxime qui aperiam numquam. assumenda eius
                  sapiente? Culpa vitae sequi veniam mollitia
                </p>
              ) : (
                ""
              )}
            </div>
          );
        })}
      </div>
      <div
        className="contact-social"
        style={{
          borderTop: "1px solid black",
        }}
      >
        <SplitGridComp>
          <div
            className="contact-query"
            style={{
              marginTop: "3rem",
              marginLeft: "2rem",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div className="contact-header">
              <h1>Want more specific question?</h1>
              <h3>Monday - Friday : 9:00 am - 7:00 pm</h3>
            </div>
            <div
              className="form-sec"
              style={{
                maxWidth: "100%",
              }}
            >
              {input_fields.map((ifp, i) => {
                return (
                  <CustomInput
                    key={i}
                    placeholder={ifp}
                    style={{
                      padding: "1.2rem",
                      fontSize: "1rem",
                      margin: "1rem 0",
                      borderRadius: ".5rem",
                    }}
                  />
                );
              })}
              <TextAreaCustom
                style={{
                  borderRadius: ".5rem",
                }}
              ></TextAreaCustom>
            </div>
          </div>
          <div
            className="addrs"
            style={{
              padding: "2rem",
              backgroundColor: "#F79E4D",
              color: "white",
              fontSize: "1.5rem",
            }}
          >
            <h1>Our office</h1>
            <b>
              <p>Phnom penh</p>
            </b>
            <p>bkc street</p>
            <p>Preah Monivong Blvd (93)</p>
            <p>Cambodia</p>
            <p>+855 6942069</p>
            <p>dronebodia@gmail.com</p>
          </div>
        </SplitGridComp>
      </div>
    </MainPage>
  );
}

export default connect(ContactPage);
