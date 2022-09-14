import React, { useEffect, useContext} from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logos/run-is-fun-vector-NEG++.png";
import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import Search from "./Search";

gsap.registerPlugin(ScrollToPlugin);

const Nav = () => {

  
  const onLoad = () => {
    gsap
      .timeline()
      .fromTo(
        "li",
        {
          y: -150,
          opacity: 0,
        },
        {
          y: 0,
          duration: 0.8,
          opacity: 1,
          ease: "power2.inOut",
          stagger: {
            each: 0.2,
            from: "random",
          },
        }
      )
      .to(".pages", {
        y: -20,
        duration: 0.5,
        delay: 0.3,
      })
      .from(".ligne",
      {
        x:"-100vw",
        opacity: 0,
      });
  };

  useEffect(() => {
    onLoad();
  }, []);

  return (
    <div className="nav">
      <div className="containerNav">
        <div className="containerLogo">
          <Link to="/">
            <img src={logo} alt="logorunisfun" />
          </Link>
        </div>
        <ul className="pages">
          <NavLink to="/shoesMan">
            <li>
              <h2>chaussures</h2>
              <h4>hommes</h4>
            </li>
          </NavLink>
          <NavLink to="/shoesWoman">
            <li>
              <h2>chaussures</h2>
              <h4>femmes</h4>
            </li>
          </NavLink>
          <NavLink to="/clothesMan">
            <li>
              <h2>vêtements</h2>
              <h4>hommes</h4>
            </li>
          </NavLink>
          <NavLink to="/clothesWoman">
            <li>
              <h2>vêtements</h2>
              <h4>femmes</h4>
            </li>
          </NavLink>
          <NavLink to="/accessories">
            <li>
              <h2>Accessoires</h2>
              <h4>
                cardio <span>■</span> chrono
              </h4>
            </li>
          </NavLink>
          <li>
            <Search />
          </li>
        </ul>
      </div>
      <div className="ligne"></div>
    </div>
  );
};

export default Nav;
