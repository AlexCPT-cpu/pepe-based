import React, { useState } from "react";
import styled from "styled-components";
import Development from "./Development";
import ProductDesign from "./ProductDesign";
import WebDesign from "./WebDesign";
import Steps from "./Steps";

const data = [
  "Set up a (BSC) Wallet",
  "Get BNB (Binance Coin)",
  "Visit PancakeSwap",
  "Connect Your Wallet",
  "Swap BNB for $APEPE",
  "Confirm the Transaction",
  "View Your $APEPE Balance",
];

const Section = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  justify-content: center;
  position: relative;
  color: black;
  font-size: 14px;
  font-weight: 300;
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;

  @media only screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;

  @media only screen and (max-width: 768px) {
    padding: 20px;
    justify-content: center;
  }
`;

const List = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

const ListItem = styled.li`
  font-size: 40px;
  font-weight: bold;
  cursor: pointer;
  color: transparent;
  -webkit-text-stroke: 1px white;
  position: relative;

  @media only screen and (max-width: 768px) {
    font-size: 20px;
    color: white;
    -webkit-text-stroke: 0px;
  }

  ::after {
    content: "${(props) => props.text}";
    position: absolute;
    top: 0;
    left: 0;
    color: pink;
    width: 0px;
    overflow: hidden;
    white-space: nowrap;
  }

  &:hover {
    ::after {
      animation: moveText 0.5s linear both;

      @keyframes moveText {
        to {
          width: 100%;
        }
      }
    }
  }
`;

const Right = styled.div`
  flex: 1;
`;

const Works = () => {
  const [work, setWork] = useState("Set up a (BSC) Wallet");
  return (
    <Section id="how-to-buy">
      <div className="flex flex-col space-y-20">
        <div className="text-white text-[30px] ml-5 lg:ml-0 lg:text-[70px] whitespace-nowrap">
          How to Buy $APEPE Token
        </div>
        <Container>
          <Left>
            <List>
              {data.map((item) => (
                <ListItem key={item} text={item} onClick={() => setWork(item)}>
                  {item}
                </ListItem>
              ))}
            </List>
          </Left>
          <Right>
            {work === "Set up a (BSC) Wallet" ? (
              <Steps
                step={1}
                text="Before buying $APEPE tokens, you need to have a BSC-compatible wallet to store your tokens. You can use wallets like MetaMask, Trust Wallet, or Binance Chain Wallet. Make sure your wallet is properly set up and connected to the Binance Smart Chain network."
              />
            ) : work === "Get BNB (Binance Coin)" ? (
              <Steps
                step={2}
                text="In order to buy $APEPE tokens, you will need BNB to complete the transaction. You can acquire BNB by purchasing it from a cryptocurrency exchange or transferring it from another wallet."
              />
            ) : work === "Visit PancakeSwap" ? (
              <Steps
                step={3}
                link="https://pancakeswap.finance/"
                text="Go to the PancakeSwap decentralized exchange platform. You can access it by clicking on the following link:"
              />
            ) : work === "Connect Your Wallet" ? (
              <Steps
                step={4}
                text={`Connect your BSC wallet to PancakeSwap by clicking on the "Connect" button and selecting your wallet from the options provided. Follow the prompts to connect your wallet to PancakeSwap.`}
              />
            ) : work === "Swap BNB for $APEPE" ? (
              <Steps
                step={5}
                contract={true}
                text={`Once your wallet is connected, select the token swap feature on PancakeSwap. In the "From" field, choose BNB as the currency to swap. In the "To" field, paste the $APEPE contract address: 0x463464927671a2e8d406A1a3E64093D42a181C44. Set the desired amount of $APEPE tokens you want to buy and click the "Swap" button.`}
              />
            ) : work === "Confirm the Transaction" ? (
              <Steps
                step={6}
                text="Review the details of the transaction, including the amount of BNB to be spent and the estimated amount of $APEPE tokens you will receive. Confirm the transaction and approve the token swap in your wallet when prompted. Wait for the transaction to be processed on the Binance Smart Chain network."
              />
            ) : work === "View Your $APEPE Balance" ? (
              <Steps
                step={7}
                text="After the transaction is confirmed, you can view your $APEPE token balance in your BSC wallet. Make sure to add the $APEPE token to your wallet's token list by pasting the contract address mentioned earlier."
              />
            ) : (
              <Steps
                step={1}
                text="Before buying $APEPE tokens, you need to have a BSC-compatible wallet to store your tokens. You can use wallets like MetaMask, Trust Wallet, or Binance Chain Wallet. Make sure your wallet is properly set up and connected to the Binance Smart Chain network."
              />
            )}
          </Right>
        </Container>
      </div>
    </Section>
  );
};

export default Works;
