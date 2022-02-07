import { ArrowDownwardRounded } from "@material-ui/icons";
import styled from "styled-components";

import arrow from "../images/down-arrow.svg";

const Section = ({ car }) => {
  return (
    <Wrapper img={car.image}>
      <Hero_Text>
        <Hero_Header>{car.title}</Hero_Header>
        <Sub_Header>{car.desc}</Sub_Header>
      </Hero_Text>
      <Hero_Buttons>
        <Hero_LeftBtn>{car.buttonLeft}</Hero_LeftBtn>
        {car.buttonRight && <Hero_RightBtn>{car.buttonRight}</Hero_RightBtn>}
      </Hero_Buttons>
      <DownArrow src={arrow} alt="Down Arrow" />
    </Wrapper>
  );
};

export default Section;

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow-x: hidden;
`;

const Hero_Text = styled.div`
  text-align: center;
  margin-top: 15vh;
  animation: fade 1s ease-in-out forwards;
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  animation-delay: 0.8s;
`;
const Hero_Header = styled.h1``;
const Sub_Header = styled.p``;

const Hero_Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  margin-bottom: 10px;
  animation: fade 1s ease-in-out forwards;
  @keyframes fade {
    0% {
      opacity: 0;
      transform: translateY(-4rem);
    }
    100% {
      opacity: 1;
      transform: none;
    }
  }
  animation-delay: 0.9s;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const Hero_LeftBtn = styled.button`
  background-color: #171a20cc;
  height: 40px;
  width: 256px;
  color: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 0 15px;
  :hover {
    opacity: 1;
  }
  font-weight: 700;
  letter-spacing: 2px;
  @media (max-width: 768px) {
    margin: 10px 0;
  }
`;
const Hero_RightBtn = styled(Hero_LeftBtn)`
  background-color: #ffffffcc;
  color: #000;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  width: 40px;
  height: 40px;
  margin-bottom: 20px;
`;
