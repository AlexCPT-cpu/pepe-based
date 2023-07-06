import React, { Suspense } from "react";
import styled from "styled-components";
import { OrbitControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import Cube from "./Cube";

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  width: 1400px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const Title = styled.h1`
  font-size: 74px;

  @media only screen and (max-width: 768px) {
    font-size: 60px;
  }
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;

  @media only screen and (max-width: 768px) {
    align-items: center;
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
  font-weight: 600;
  font-size: 18px;
`;

const Desc = styled.p`
  font-size: 20px;
  color: lightgray;
`;

const Button = styled.button`
  background-color: #da4ea2;
  color: white;
  font-weight: 500;
  width: 120px;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Who = () => {
  const handleScrollToTarget = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Section id="tokenomics" className="relative">
      <Container>
        <Left>
          <Canvas camera={{ position: [5, 5, 5], fov: 25 }}>
            <Suspense fallback={null}>
              <ambientLight intensity={0.5} />
              <directionalLight position={[3, 2, 1]} />
              <Cube />
              <OrbitControls enableZoom={false} autoRotate />
            </Suspense>
          </Canvas>
        </Left>
        <Right>
          <Title className="absolute top-2 lg:top-32">Tokenomics</Title>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Network:</Subtitle>
            Binance Smart Chain (BSC-BEP20)
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Token Symbol::</Subtitle>
            $APEPE
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Token Supply:</Subtitle>
            100,100,100,100,100
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Initial liquidity:</Subtitle>
            80,080,080,808,080
          </WhatWeDo>
          <WhatWeDo>
            <Line src="./img/line.png" />
            <Subtitle>Contract:</Subtitle>
            Renounced Ownership
          </WhatWeDo>

          <Desc className="mt-5">
            The official contract address
            <br /> for $APEPE token is{" "}
            <a
              className="text-[#da4ea2] text-[15px]"
              target="_blank"
              rel="noreferrer"
              href="https://bscscan.com/token/0x463464927671a2e8d406A1a3E64093D42a181C44"
            >
              0x463464927671a2e8d406A1a3E64093D42a181C44
            </a>
          </Desc>
          <button
            onClick={() => handleScrollToTarget("how-to-buy")}
            className="whitespace-nowrap cursor-pointer rounded-lg p-3 w-32 color-white bg-[#da4ea2]"
          >
            How to Buy
          </button>
        </Right>
      </Container>
    </Section>
  );
};

export default Who;
