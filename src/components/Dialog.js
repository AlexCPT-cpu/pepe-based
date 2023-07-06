import { XCircleIcon } from "@heroicons/react/24/solid";
import React from "react";
import styled from "styled-components";

const Dialog = ({ handleClose }) => {
  //   const Container = styled.div`
  //   height: 100vh;
  //   scroll-snap-type: y mandatory;
  //   scroll-behavior: smooth;
  //   overflow-y: auto;
  //   scrollbar-width: none;
  //   color: white;
  //   background:
  //   &::-webkit-scrollbar {
  //     display: none;
  //   }
  // `;

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
    color: white;
    font-size: 20px;
    font-weight: 300px;
  `;

  const handleScrollToTarget = (id) => {
    handleClose();
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <dialog
      data-modal
      className="rounded-lg min-w-full min-h-screen backdrop-blur-xl bg-transparent z-40"
    >
      <div className="relative w-full h-full flex-col flex justify-center items-center z-50">
        <div className="absolute top-0 right-0">
          <XCircleIcon
            onClick={handleClose}
            className="w-10 cursor-pointer text-white"
          />
        </div>

        <div className="text-white mb-8 mt-8 absolute top-32">
          <div className="flex flex-col space-y-12 text-white justify-center items-center">
            <ListItem
              style={{ listStyle: "none" }}
              onClick={() => handleScrollToTarget("home")}
            >
              Home
            </ListItem>
            <ListItem style={{ listStyle: "none" }}>
              <a href="/">Litepaper</a>
            </ListItem>
            <ListItem
              style={{ listStyle: "none" }}
              onClick={() => handleScrollToTarget("contact")}
            >
              Contact
            </ListItem>
            <ListItem
              style={{ listStyle: "none" }}
              onClick={() => handleScrollToTarget("roadmap")}
            >
              Roadmap
            </ListItem>
            <div className="whitespace-nowrap cursor-pointer rounded-lg p-3 color-white bg-[#da4ea2]">
              <a
                href="https://pancakeswap.finance/swap?outputCurrency=0x463464927671a2e8d406A1a3E64093D42a181C44"
                rel="noreferrer"
                target="_blank"
                className="text-white"
              >
                Buy $APEPE on PCS
              </a>
            </div>
          </div>
        </div>
      </div>
    </dialog>
  );
};

export default Dialog;
