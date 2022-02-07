import styled from "styled-components";
import logo from "../images/logo.svg";

const Navbar = () => {
  return (
    <Nav>
      <Nav_Logo_Cntr>
        <Nav_Logo src={logo} />
      </Nav_Logo_Cntr>
      <Nav_Menu>
        <Models>Model S</Models>
        <Models>Model Y</Models>
        <Models>Model X</Models>
        <Models>Model 3</Models>
        <Models>Solar Roofs</Models>
        <Models>Solar Panels</Models>
      </Nav_Menu>
      <Nav_Menu_Right>
        <Models>Shop</Models>
        <Models>Account</Models>
        <Models>Menu</Models>
      </Nav_Menu_Right>
    </Nav>
  );
};

export default Navbar;

const Nav = styled.div`
  min-height: 60px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  align-items: center;
  padding: 0 40px;
  width: 100%;
  justify-content: space-between;
`;
const Nav_Logo = styled.img`
  height: 15px;
  width: 150px;
`;
const Nav_Menu = styled.div`
  display: flex;
  align-items: center;
  flex: 2;
  width: 100%;
  justify-content: center;
`;
const Nav_Logo_Cntr = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  width: 100%;
  justify-content: flex-start;
`;
const Nav_Menu_Right = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  justify-content: flex-end;
`;
const Models = styled.p`
  margin: 0 5px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s ease-in-out;
  padding: 10px 15px;
  border-radius: 10px;
  font-size: 14px;
  :hover {
    background: #dfdfdf6c;
    border-radius: 10px;
  }
`;
