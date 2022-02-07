import styled from "styled-components";
import { data } from "../data";
import Section from "./Section";

const Home = () => {
  return (
    <Hero>
      {data.map((car) => (
        <Section car={car} key={car.id} />
      ))}
    </Hero>
  );
};

export default Home;

const Hero = styled.div`
  height: 100vh;
  overflow-x: hidden;
`;
