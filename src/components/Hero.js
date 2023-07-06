import React, { Suspense } from "react";
import styled from "styled-components";
import Navbar from "./Navbar";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Sphere, MeshDistortMaterial } from "@react-three/drei";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: start;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    height: 200vh;
  }
`;

const Container = styled.div`
  height: 100%;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

const Left = styled.div`
  flex: 2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    flex: 1;
    align-items: center;
  }
`;

const Title = styled.h1`
  font-size: 54px;

  @media only screen and (max-width: 768px) {
    text-align: center;
  }
`;

const WhatWeDo = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const Line = styled.img`
  height: 5px;
`;

const Subtitle = styled.h2`
  color: #da4ea2;
`;

const Desc = styled.p`
  font-size: 18px;
  color: lightgray;
  @media only screen and (max-width: 768px) {
    padding: 20px;
    text-align: center;
  }
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 100px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Right = styled.div`
  flex: 3;
  position: relative;
  @media only screen and (max-width: 768px) {
    flex: 1;
    width: 100%;
  }
`;

const Img = styled.img`
  width: 750px;
  height: 550px;
  object-fit: contain;
  position: absolute;
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

const Hero = () => {
  const handleScrollToTarget = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section>
      <Navbar />
      <Container>
        <Left>
          <Title>Arab PEPE welcomes you!</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            {/* <Subtitle>What we Do</Subtitle> */}
          </WhatWeDo>
          <Desc>
            JUST TO BE SAFE!: Check if you are currently on:&nbsp;
            <a className="text-[#da4ea2]" href="https://ArabPepe.com">
              https://ArabPepe.com{" "}
            </a>{" "}
            :)
          </Desc>
          <div className="flex flex-row space-x-6">
            {" "}
            <button
              onClick={() => handleScrollToTarget("tokenomics")}
              className="whitespace-nowrap cursor-pointer rounded-lg p-3 color-white bg-[#da4ea2] w-32"
            >
              Learn More
            </button>
            <button className="whitespace-nowrap cursor-pointer rounded-lg p-3 color-white bg-[#da4ea2] w-32">
              <a href="/">LitePaper</a>
            </button>
          </div>
        </Left>
        <Right>
          {/* <Canvas>
            <Suspense fallback={null}>
              <OrbitControls enableZoom={false} />
              <ambientLight intensity={1} />
              <directionalLight position={[3, 2, 1]} />
              <Sphere args={[1, 100, 200]} scale={2.4}>
                <MeshDistortMaterial
                  color="#3d1c56"
                  attach="material"
                  distort={0.5}
                  speed={2}
                />
              </Sphere>
            </Suspense>
          </Canvas> */}
          <Img
            className="lg:top-0 lg:bottom-1 lg:right-0 bottom-[720px] right-8"
            src="./gallery/hero.png"
          />
        </Right>
      </Container>
    </Section>
  );
};

export default Hero;
