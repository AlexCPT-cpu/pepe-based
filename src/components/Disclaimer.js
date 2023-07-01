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

const Disclaimer = () => {
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
    <Section className="mt-[550px] lg:mt-12">
      <Container>
        <div className="flex justify-center flex-col space-y-10">
          <div className="text-center mx-auto text-white text-[50px] lg:text-[60px] whitespace-nowrap">
            Disclaimer
          </div>
          <div className="text-center mx-auto justify-center flex flex-col pt-12 lg:pt-32 text-[15px] lg:text-[25px] px-3 lg:px-10">
            $ARABPEPE coin has no association with Matt Furie or his creation
            Pepe the Frog. This token is simply paying homage to a meme we all
            love and recognize. $ARABPEPE is a meme coin with no intrinsic value
            or expectation of financial return. But you could be surprised by
            our creativity! :> There is no formal team or roadmap. The coin is
            completely useless and for entertainment purposes only. ** The
            content on this website is for informational purposes only and does
            not constitute financial, investment, or other professional advice.
            Investing in cryptocurrencies carries inherent risks, and you should
            perform your own research before making any decisions.
            TurboToadToken and its team members are not responsible for any
            losses or damages that may occur as a result of using the
            information provided on this website.
            <br />
            <span className="mt-20">
              {" "}
              © 2023 ArabPepe.com All rights reserved.
            </span>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Disclaimer;
