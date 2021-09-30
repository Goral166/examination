import React, { useState, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Button,
} from "reactstrap";

const Navigation = () => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  const handleLogout = () => {
    localStorage.removeItem("jwt");
    history.push("/");
  };

  const getToken = localStorage.getItem("jwt");

  return (
    <div>
      {getToken ? (
        <Navbar color="light" light expand="md">
          <NavbarBrand>Teacher</NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to="/viewexam">View Exam</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/allstudents">All Students</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/studentexam">Student For Exam</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to="/resetPassword">Reset Password</Link>
                </NavLink>
              </NavItem>
            </Nav>
            <Button onClick={handleLogout}>Logout</Button>
          </Collapse>
        </Navbar>
      ) : (
        ""
      )}
    </div>
  );
};

export default Navigation;
