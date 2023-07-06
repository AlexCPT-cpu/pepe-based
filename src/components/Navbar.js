import React from "react";
import styled from "styled-components";
import { Bars3Icon } from "@heroicons/react/24/solid";
import Dialog from "./Dialog";

const Section = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    width: 100%;
  }
`;

const Container = styled.div`
  width: 1400px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 0px;

  @media only screen and (max-width: 768px) {
    width: 100%;
    padding: 10px;
  }
`;

const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 50px;
`;

const Logo = styled.img`
  height: 50px;
`;

const List = styled.ul`
  display: flex;
  gap: 20px;
  list-style: none;

  @media only screen and (max-width: 768px) {
    display: none;
  }
`;

const ListItem = styled.li`
  cursor: pointer;
`;

const Icons = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
`;

const Icon = styled.img`
  width: 20px;
  cursor: pointer;
`;

const Button = styled.button`
  width: 100px;
  padding: 10px;
  background-color: #da4ea2;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
`;

const Navbar = () => {
  const handleScrollToTarget = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleOpen = () => {
    const modal = document.querySelector("[data-modal]");
    modal.showModal();
  };

  const handleClose = () => {
    const modal = document.querySelector("[data-modal]");
    modal.close();
  };

  return (
    <Section id="home">
      <Container>
        <Links>
          <a href="/">
            <Logo className="rounded-full" src="./gallery/png-03.png" />
          </a>

          <List>
            <ListItem onClick={() => handleScrollToTarget("home")}>
              Home
            </ListItem>
            <ListItem>
              <a href="/">Litepaper</a>
            </ListItem>
            <ListItem onClick={() => handleScrollToTarget("contact")}>
              Contact
            </ListItem>
            <ListItem onClick={() => handleScrollToTarget("roadmap")}>
              Roadmap
            </ListItem>
          </List>
        </Links>
        <Icons>
          <Icon src="./img/search.png" />
          <a
            href="https://pancakeswap.finance/swap?outputCurrency=0x463464927671a2e8d406A1a3E64093D42a181C44"
            rel="noreferrer"
            target="_blank"
            className="hidden lg:block"
          >
            <button className="whitespace-nowrap cursor-pointer rounded-lg p-3 color-white bg-[#da4ea2]">
              Buy $APEPE on PCS
            </button>
          </a>
          <Bars3Icon onClick={handleOpen} className="w-9" />
          <Dialog handleClose={handleClose} />
        </Icons>
      </Container>
    </Section>
  );
};

export default Navbar;
