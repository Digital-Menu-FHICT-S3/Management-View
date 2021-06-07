import "./Header.sass";
import {Row, Nav, Navbar} from "react-bootstrap";
import {AiOutlineLeft} from "react-icons/ai";
import {MdRestaurantMenu} from "react-icons/md";
import {BsSearch} from "react-icons/bs";
import {AiOutlineShoppingCart} from "react-icons/ai";
import {CgAdd} from "react-icons/cg"
import {Link} from "react-router-dom";

import React from "react";
import {GiAppleSeeds, GiKnifeFork} from "react-icons/all";

const Header = ({headerTitle}) => {
    return (
        <div className="header-wrapper">
            <Navbar bg="light" expand="lg">
                <Link to="/">
                    <Navbar.Brand>
                        {" "}
                        {headerTitle}{" "}
                    </Navbar.Brand>
                </Link>
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <Link className="link" to="/add-dish">
                            <CgAdd size={30}/>
                        </Link>
                        <Link className="link" to="/manage-categories">
                            <GiKnifeFork size={30}/>
                        </Link>
                        <Link className="link" to="/manage-inventory">
                            <GiAppleSeeds size={30}/>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;
