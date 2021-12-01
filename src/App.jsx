import React from "react";
import { Link, Switch, Route } from "react-router-dom";

import About from "./components/about/About";
import Inicio from "./components/inicio/Inicio";
import Portfolio from "./components/portfolio/Portfolio";
import Blogs from "./components/blogs/Blogs";
import Contact from "./components/contact/Contact";
import Topbar from "./components/topbar/Topbar";
import styled from "styled-components";
import {
  Home,
  Person,
  BusinessCenter,
  Book,
  Contacts,
} from "@material-ui/icons";


const NavStyles = styled.nav`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  z-index: 1000;
  align-items: flex-end;
  @media (max-width: 375px) {
  
  }
  

`;

const LinkStyles = styled(Link)`
  padding: 2rem;
  font-size: 2rem;
  background: #1a1a1a;;
  flex: 1;
  color: white;
  text-align: center;
  transition: 0.2s linear;
  text-decoration: none;
  .icons {
    color: crimson;
    padding-right: 0.5rem;
    font-size: 30px;
  }
  span {
    text-decoration: none;
  }

  &:hover {
    background: crimson;
    padding-bottom: 6rem;

    .icons {
      color: white;
    }
  }

  @media (max-width: 768px) {
    
    span{
      display:none;
    }
    &:hover{
      padding-bottom: 2rem;
    }
  }
`;

function App() {
  return (
    <>
      <NavStyles>
        <LinkStyles to="/">
          <Home className="icons" /> <span> Home</span>
        </LinkStyles>

        <LinkStyles to="/about">
          <Person className="icons" /> <span>About</span>{" "}
        </LinkStyles>

        <LinkStyles to="/portfolio">
          <BusinessCenter className="icons" /> <span>Portfolio</span>{" "}
        </LinkStyles>

        <LinkStyles to="/blogs">
          <Book className="icons" /> <span>Blogs</span>{" "}
        </LinkStyles>

        <LinkStyles to="/contact">
          <Contacts className="icons" />
          <span>Contact</span>{" "}
        </LinkStyles>
      </NavStyles>
      <Switch>
        <Route exact path="/">
          <Inicio />
        </Route>
        <Route exact path="/about">
          <About />
        </Route>
        <Route exact path="/portfolio">
          <Portfolio />
        </Route>
        <Route exact path="/blogs">
          <Blogs />
        </Route>
        <Route exact path="/contact">
          <Contact />
        </Route>
      </Switch>
    </>
  );
}

export default App;
