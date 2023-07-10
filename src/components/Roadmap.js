import React, { useRef, useLayoutEffect } from "react";
import styled from "styled-components";
import DrawSvg from "./svg/DrawSvg";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

const Section = styled.section`
  min-height: 100vh;
  width: 100vw;
  background-color: ${(props) => props.theme.text};
  position: relative;
  scroll-snap-align: start;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.body};
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.text};
  width: fit-content;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
width: 70%
height:200vh;
background-color: ${(props) => props.theme.text};
margin: 0 auto;
display:flex;
justify-content:center;
align-items:center;
position:relative;

@media (max-width: 64em) {
  width: 80%;
}
@media (max-width: 48em) {
  width: 90%;
}
`;
const SvgContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Items = styled.ul`
  list-style: none;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  //background-color:lightblue;

  @media (max-width: 48em) {
    width: 100%;
  }

  & > *:nth-of-type(2n + 1) {
    justify-content: start;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: right;
    }
    p {
      border-radius: 0 40px 0 40px;
    }
  }

  & > *:nth-of-type(2n) {
    justify-content: end;
    @media (max-width: 48em) {
      justify-content: center;
    }

    div {
      border-radius: 0 50px 0 50px;
      text-align: left;
    }

    p {
      border-radius: 0 40px 0 40px;
    }
  }
`;
const Item = styled.li`
  width: 100%;
  height: 100%;
  display: flex;
  margin-bottom: 35px;

  @media (max-width: 48em) {
    flex: 1;

    width: 100%;
  }
`;
const ItemContainer = styled.div`
  width: 40%;
  height: fit fit-content;
  padding: 1rem;
  border: 3px solid ${(props) => props.theme.body};

  @media (max-width: 48em) {
    width: 70%;
  }
`;
const Box = styled.p`
  height: fit-content;
  background-color: ${(props) => props.theme.carouselColor};
  color: ${(props) => props.theme.text};
  padding: 1rem;
  position: relative;
  border: 1px solid ${(props) => props.theme.text};
`;
const SubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-align: center;
  font-weight: 600;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
    font-weight: 600;
  }
`;

const SubSubTitle = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontxl};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-align: center;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontlg};
  }
`;
const Text = styled.span`
  display: block;
  font-size: ${(props) => props.theme.fontsm};
  text-transform: capitalize;
  color: ${(props) => props.theme.text};
  text-align: center;

  font-weight: 0;
  margin: 0.5rem 0;

  @media (max-width: 40em) {
    font-size: ${(props) => props.theme.fontxs};
  }
`;

const RoadMapItem = ({ title, subtext, addToRef, subtitle }) => {
  return (
    <Item ref={addToRef}>
      <ItemContainer>
        <Box>
          <SubTitle className="text-lg lg:text-xl">{title}</SubTitle>
          <SubSubTitle className="text-sm lg:text-lg font-normal">
            {subtitle}
          </SubSubTitle>
          {subtext.map((txt, id) => (
            <Text
              key={id}
              className="font-thin whitespace text-xs lg:text-sm break-words"
            >
              {txt}
            </Text>
          ))}
        </Box>
      </ItemContainer>
    </Item>
  );
};

const Roadmap = () => {
  const revealRefs = useRef([]);
  revealRefs.current = [];
  gsap.registerPlugin(ScrollTrigger);

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useLayoutEffect(() => {
    let t1 = gsap.timeline();
    revealRefs.current.forEach((el, index) => {
      t1.fromTo(
        el.childNodes[0],
        {
          y: "0",
        },
        {
          y: "-30%",

          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top center+=200px",
            end: "bottom center",
            scrub: true,
            // markers:true,
          },
        }
      );
    });

    return () => {};
  }, []);

  return (
    <Section id="roadmap">
      <Title className="text-center mx-auto text-white text-[50px] lg:text-[60px] whitespace-nowrap">
        Roadmap
      </Title>
      <Container>
        <SvgContainer>
          <DrawSvg />
        </SvgContainer>
        <Items>
          <Item>&nbsp;</Item>
          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="Token Lock-up and Partnership Building"
            subtext={[
              "- Lock 50% of the 5T tokens for 6 months, primarily for burning and building partnerships.",
              "- Use the locked tokens strategically to create scarcity and drive demand.",
              "- Identify potential partners within the cryptocurrency space and initiate negotiations for collaboration.",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="Finalizing and Deploying New Website"
            subtext={[
              "- Allocate resources to finalize the development of the new website.",
              "- Ensure the website reflects the brand image, provides comprehensive project information, and is user-friendly.",
              "- Launch the new website to enhance credibility and engage with potential investors and community members.",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="CoinMarketCap and CoinGecko Listings"
            subtext={[
              "- Focus on increasing the project's numbers and metrics to meet the requirements for CoinMarketCap and CoinGecko listings.",
              "- Implement strategies to boost trading volume, increase the number of holders, and enhance the project's overall market presence.",
              "- Prepare all the necessary documentation and apply for listings on these platforms to gain wider exposure and recognition.",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="Increasing LP, Trading Volume, and Community Growth"
            subtext={[
              "- Develop a comprehensive plan to increase liquidity pool (LP) by incentivizing LP providers and traders.",
              "- Implement strategies to boost trading volume, such as trading competitions, rewards, and referral programs.",
              "- Encourage organic growth of the community through engaging content, regular updates, and community events.",
            ]}
          />
          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle='Burning or Gold" Marketing Campaign'
            subtext={[
              '- Utilize a "Burning or Gold" marketing approach, where small amounts of funds are spent gradually until a breakthrough is achieved.',
              "- Engage the community and seek their support to raise the necessary funds for marketing activities.",
              "- Focus on social media platforms to increase brand visibility, attract new investors, and generate excitement around the project.",
            ]}
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="Negotiations with Potential Partners"
            subtext={[
              "- Continue engaging with potential partners and explore mutually beneficial collaborations.",
              "- Seek partnerships that can provide exposure to a larger audience, strengthen the project's credibility, and enhance token utility.",
            ]}
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Month 1 and 2"
            subtitle="Marketing Campaigns:"
            subtext={[
              "- Allocate a budget of $2,500 for marketing campaigns (subject to the amount raised).",
              " - Run three targeted marketing campaigns to maximize reach and impact.",
              "- Prioritize campaigns that can deliver significant exposure, such as:",
              "   • Social media promotion on BSC Presale's platforms (500k++ followers) with a post and 24-hour pin.",
              "   • Collaboration with Ninjapromo (2M+ followers) for an airdrop Telegram bot, targeting 15,000 users.",
              "   • Launch a crypto advertising campaign for a couple of weeks to increase brand awareness and attract potential investors.",
            ]}
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Month 3"
            subtitle="Exchange Listing:"
            subtext={[
              "- Aim for a successful listing on a reputable cryptocurrency exchange. - Prepare all the necessary documentation, comply with exchange requirements, and work towards listing approval.",
              "- Leverage the exchange listing to increase liquidity, attract new investors, and enhance project credibility.",
            ]}
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Month 3"
            subtitle="Designing Products for ArabPepe"
            subtext={[
              "- Explore opportunities to create branded merchandise and products related to ArabPepe.",
              " - Design and develop merchandise that resonates with the community, such as clothing, accessories, or digital collectibles.",
              "              - Launch the products to strengthen brand loyalty, create additional revenue streams, and increase project visibility.",
            ]}
          />

          <RoadMapItem
            addToRef={addToRefs}
            title="Month 3"
            subtitle="Creation of New Short-Term Roadmap"
            subtext={[
              "- Develop a new roadmap that outlines the project's goals and milestones for the next phase.",
              "- Incorporate feedback from the community, market trends, and insights gained during the first two months.",
              "- Clearly communicate the roadmap to the community, highlighting the project's vision, upcoming developments, and growth strategies.",
            ]}
          />
        </Items>
      </Container>
    </Section>
  );
};

export default Roadmap;
