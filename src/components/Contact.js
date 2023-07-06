import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import styled from "styled-components";
import Map from "./Map";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
`;

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
  gap: 50px;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  @media only screen and (max-width: 768px) {
    justify-content: center;
  }
`;

const Title = styled.h1`
  font-weight: 200;
`;

const Form = styled.form`
  width: 500px;
  display: flex;
  flex-direction: column;
  gap: 25px;

  @media only screen and (max-width: 768px) {
    width: 300px;
  }
`;

const Input = styled.input`
  padding: 20px;
  background-color: #e8e6e6;
  border: none;
  border-radius: 5px;
`;

const TextArea = styled.textarea`
  padding: 20px;
  border: none;
  border-radius: 5px;
  background-color: #e8e6e6;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  border: none;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
  padding: 20px;
`;

const Right = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Img = styled.img`
  width: 750px;
  height: 550px;
  object-fit: contain;
  position: absolute;
  top: 0;
  bottom: 1;

  right: 0;
  margin: auto;
  animation: animate 2s infinite ease alternate;

  @media only screen and (max-width: 768px) {
    width: 300px;
    height: 300px;
  }

  @keyframes animate {
    to {
      transform: translateY(20px);
    }
  }
`;

const Contact = () => {
  const ref = useRef();
  const [success, setSuccess] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_id", "template_id", ref.current, "public_key")
      .then(
        (result) => {
          console.log(result.text);
          setSuccess(true);
        },
        (error) => {
          console.log(error.text);
          setSuccess(false);
        }
      );
  };
  return (
    <Section id="contact">
      <div className="flex justify-center flex-col space-y-10">
        <div className="text-center mx-auto text-white text-[25px] lg:text-[60px] whitespace-pre-wrap font-semibold lg:mt-4 mt-12">
          Download your new profile pictures :)
        </div>
        <div className="flex lg:flex-row justify-center lg:space-x-16 flex-col mx-auto">
          <div>
            <a href="/gallery/png-01.png" target="_blank" rel="noreferrer">
              <img
                alt="images"
                src="/gallery/png-01.png"
                className="w-[200px]"
              />
            </a>
          </div>
          <div>
            <a href="/gallery/png-02.png" target="_blank" rel="noreferrer">
              <img
                alt="images"
                src="/gallery/png-02.png"
                className="w-[200px]"
              />
            </a>
          </div>
          <div>
            <a href="/gallery/png-03.png" target="_blank" rel="noreferrer">
              <img
                alt="images"
                src="/gallery/png-03.png"
                className="w-[200px]"
              />
            </a>
          </div>
          <div>
            <a href="/gallery/png-04.png" target="_blank" rel="noreferrer">
              <img
                alt="images"
                src="/gallery/png-04.png"
                className="w-[200px]"
              />
            </a>
          </div>
        </div>
        <div>
          <div className="text-center mx-auto text-white text-[50px] lg:text-[60px] whitespace-nowrap">
            Tax
          </div>
          <div className="text-center space-y-5 mt-6 flex flex-col mx-auto text-white text-[18px] lg:text-[25px]">
            <div>5% - Buy Tax</div>

            <div>5% - Sell Tax</div>
            <div>(2% Token Distribution, 3% Liquidity)</div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center w-full mb-[200px] pb-[200px]">
          <div className="text-center mx-auto text-white text-[50px] lg:text-[60px] whitespace-nowrap">
            Follow Us
          </div>
          <div className="flex flex-row mx-auto text-center w-full items-center justify-center mt-4 space-x-5">
            <a
              href="https://twitter.com/ArabPepeBSC"
              target="_blank"
              rel="noreferrer"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 14 14"
              >
                <path
                  fill="currentColor"
                  d="M7 0c3.87 0 7 3.13 7 7s-3.13 7-7 7s-7-3.13-7-7s3.13-7 7-7ZM5.72 10.69c3.1 0 4.8-2.57 4.8-4.8v-.22c.33-.24.62-.54.84-.88c-.3.13-.63.22-.97.27c.35-.21.62-.54.74-.93c-.33.19-.69.33-1.07.41c-.31-.33-.75-.53-1.23-.53c-.93 0-1.69.76-1.69 1.69c0 .13.01.26.05.38c-1.4-.07-2.65-.74-3.48-1.76c-.14.25-.23.54-.23.85c0 .58.3 1.1.75 1.4c-.28 0-.54-.08-.76-.21v.02c0 .82.58 1.5 1.35 1.66c-.14.04-.29.06-.44.06c-.11 0-.21-.01-.32-.03c.21.67.84 1.16 1.57 1.17c-.58.45-1.31.72-2.1.72c-.14 0-.27 0-.4-.02c.74.48 1.63.76 2.58.76"
                  className="cls-1"
                />
              </svg>
            </a>
            <a href="https://t.me/ArabPepeBSC" target="_blank" rel="noreferrer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="110"
                height="110"
                viewBox="0 0 20 20"
              >
                <path
                  fill="currentColor"
                  d="M10 0c5.523 0 10 4.477 10 10s-4.477 10-10 10S0 15.523 0 10S4.477 0 10 0Zm4.442 6c-.381.007-.966.207-3.779 1.362a485.41 485.41 0 0 0-5.907 2.512c-.48.189-.73.373-.753.553c-.044.346.46.453 1.094.657c.517.166 1.213.36 1.575.368c.328.007.694-.127 1.098-.4c2.76-1.84 4.183-2.769 4.273-2.789c.063-.014.15-.032.21.02c.059.052.053.15.046.177c-.05.211-2.641 2.538-2.79 2.691l-.072.072c-.55.543-1.105.898-.147 1.521c.866.563 1.37.922 2.26 1.5c.57.368 1.017.805 1.605.752c.271-.025.55-.276.693-1.026c.335-1.77.995-5.608 1.147-7.19a1.742 1.742 0 0 0-.017-.393a.42.42 0 0 0-.144-.27c-.121-.098-.309-.118-.392-.117Z"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
