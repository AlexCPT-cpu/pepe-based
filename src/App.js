import styled from "styled-components";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import Who from "./components/Who";
import Works from "./components/Works";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Disclaimer from "./components/Disclaimer";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/bg.jpeg");
  &::-webkit-scrollbar {
    display: none;
  }
`;

function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container>
      <Hero />
      <Who />
      <Works />
      <Contact />
      <Disclaimer />
    </Container>
  );
}

export default App;
