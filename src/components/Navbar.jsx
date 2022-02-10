import { Close } from "@material-ui/icons";
import { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
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
        <Models onClick={() => setMenu(!menu)}>Menu</Models>
      </Nav_Menu_Right>
      <Nav_Full_Menu menu={menu}>
        <Icon onClick={() => setMenu(!menu)}>
          <Close />
        </Icon>
        <Nav_Link>Existing Inventory</Nav_Link>
        <Nav_Link>Used Inventory</Nav_Link>
        <Nav_Link>Trade-In</Nav_Link>
        <Nav_Link>Test Drive</Nav_Link>
        <Nav_Link>Cybertruck</Nav_Link>
        <Nav_Link>Roadster</Nav_Link>
        <Nav_Link>Semi</Nav_Link>
        <Nav_Link>Charging</Nav_Link>
        <Nav_Link>Powerwall</Nav_Link>
        <Nav_Link>Commercial Energy</Nav_Link>
        <Nav_Link>Utilities</Nav_Link>
        <Nav_Link>Find Us</Nav_Link>
        <Nav_Link>Support</Nav_Link>
        <Nav_Link>Investor Relations</Nav_Link>
      </Nav_Full_Menu>
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

const Nav_Full_Menu = styled.div`
  position: absolute;
  top: 0;
  right: ${(props) => (props.menu ? "0" : "-20%")};
  height: 100vh;
  background: #fff;
  width: 20%;
  padding: 10px 20px;
  transition: all 0.8s ease;
  opacity: ${(props) => (props.menu ? "1" : "0.4")};
`;
const Nav_Link = styled.p`
  padding: 5px 15px;
  margin-top: 15px;
  border-radius: 10px;
  font-size: 14px;
  transition: background 0.2s ease-in-out;
  cursor: pointer;
  font-weight: 500;
  :hover {
    background: #dfdfdf6c;
  }
`;
const Icon = styled.div`
  display: flex;
  margin-left: auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 25px;
  margin-top: 15px;
  cursor: pointer;
  padding: 10px;
  border-radius: 50%;
  transition: background 0.2s ease-in-out;
  width: 40px;
  height: 40px;
  :hover {
    background: #dfdfdf6c;
  }
`;
