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
        <div className="flex justify-center flex-col items-center w-full">
          <div className="text-center mx-auto text-white text-[50px] lg:text-[60px] whitespace-nowrap">
            Follow Us
          </div>
          <div className="flex flex-row mx-auto text-center w-full items-center ml-28 mt-10 lg:ml-[690px] space-x-8">
            <a
              href="https://twitter.com/ArabPepeBSC"
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="social"
                src="/gallery/twitter.png"
                className="w-20 lg:w-40"
              />
            </a>
            <a href="https://t.me/ArabPepeBSC" target="_blank" rel="noreferrer">
              <img
                alt="social"
                src="/gallery/telegram.png"
                className="w-16 lg:w-36"
              />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
