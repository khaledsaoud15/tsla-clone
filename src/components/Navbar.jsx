import styled from "styled-components";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Nav_Logo src={logo} />
      <Nav_Menu>
        <Models>Model S</Models>
        <Models>Model Y</Models>
        <Models>Model X</Models>
        <Models>Model 3</Models>
        <Models>Solar Roofs</Models>
        <Models>Solar Panels</Models>
      </Nav_Menu>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  min-height: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 0 40px;
  width: 100%;
`;
const Nav_Logo = styled.img``;
const Nav_Menu = styled.div`
  margin-left: auto;
  margin-right: auto;
  display: flex;
  align-items: center;
`;
const Models = styled.p`
  margin: 0 5px;
  font-weight: 500;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  padding: 10px 15px;
  border-radius: 10px;
  :hover {
    background: #d8d8d86d;
    border-radius: 10px;
  }
`;
