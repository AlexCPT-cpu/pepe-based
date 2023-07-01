import styled from "styled-components";

const Desc = styled.div`
  width: 100px;
  height: 60px;
  padding: 20px;
  background-color: white;
  border-radius: 10px;
  position: absolute;
  top: 100px;
  right: 100px;
  text-align: center;

  @media only screen and (max-width: 768px) {
    top: 0;
    bottom: 650px;
    left: 120px;
    right: 0;
    width: 80px;
    height: 50px;
    margin: auto;
  }
`;

const Steps = ({ text, step, link, contract }) => {
  return (
    <>
      {contract ? (
        <div className="h-full">
          <div className="mt-10 text-[25px] text-white transition-all ease-in-out delay-75">
            Once your wallet is connected, select the token swap feature on
            PancakeSwap. In the "From" field, choose BNB as the currency to
            swap. In the "To" field, paste the $APEPE contract address:{" "}
            <a
              href="https://bscscan.com/address/0x463464927671a2e8d406A1a3E64093D42a181C44"
              target="_blank"
              rel="noreferrer"
              className="text-[#da4ea2]"
            >
              0x463464927671a2e8d406A1a3E64093D42a181C44
            </a>
            . Set the desired amount of $APEPE tokens you want to buy and click
            the "Swap" button.
          </div>
          <Desc className="font-semibold text-[15px] transition-all ease-in-out delay-75">
            Step {step}
          </Desc>
        </div>
      ) : (
        <div className="h-full">
          <div className="mt-10 text-[19px] px-5 lg:text-[25px] text-white transition-all ease-in-out text-center delay-75">
            {text}{" "}
            {link && (
              <a
                href="https://pancakeswap.finance/"
                target="_blank"
                rel="noreferrer"
                className="text-[#da4ea2]"
              >
                https://pancakeswap.finance/
              </a>
            )}
          </div>
          <Desc className="font-semibold text-[13px] text-center items-center justify-center whitespace-nowrap flex lg:text-[15px] transition-all ease-in-out delay-75">
            Step {step}
          </Desc>
        </div>
      )}
    </>
  );
};

export default Steps;
