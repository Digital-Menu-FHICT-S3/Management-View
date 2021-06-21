import "./Header.sass";
import { Nav, Navbar } from "react-bootstrap";
import { CgAdd } from "react-icons/cg";
import { Link } from "react-router-dom";
import React from "react";
import { GiKnifeFork, GiAppleSeeds, GiRoundTable } from "react-icons/gi";
import { BsFillDashSquareFill } from "react-icons/bs";
import logo from "../../assets/m_sticky_header.png";

const Header = ({ headerTitle }) => {
  return (
    <div className="header-wrapper">
      <Navbar bg="light" expand="lg">
        <Link to="/">
          <Navbar.Brand>
            <img src={logo} id="logo" />
            {headerTitle}
          </Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Link className="link" to="/DishManagement">
              <BsFillDashSquareFill size={30} />
            </Link>
            <Link className="link" to="/add-dish">
              <CgAdd size={30} />
            </Link>
            <Link className="link" to="/manage-categories">
              <GiKnifeFork size={30} />
            </Link>
            <Link className="link" to="/manage-inventory">
              <GiAppleSeeds size={30} />
            </Link>
            <Link className="link" to="/tables">
              <GiRoundTable size={30} />
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
