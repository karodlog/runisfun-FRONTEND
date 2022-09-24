import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import godasses from "../../assets/img/godasses.png";

import hommes01 from "../../assets/img/chaussuresHommes/hommes01.png";
import hommes02 from "../../assets/img/chaussuresHommes/hommes02.png";
import hommes03 from "../../assets/img/chaussuresHommes/hommes03.png";
import hommes04 from "../../assets/img/chaussuresHommes/hommes04.png";
import hommes05 from "../../assets/img/chaussuresHommes/hommes05.png";
import hommes06 from "../../assets/img/chaussuresHommes/hommes06.png";
import hommes07 from "../../assets/img/chaussuresHommes/hommes07.png";
import hommes08 from "../../assets/img/chaussuresHommes/hommes08.png";
import hommes09 from "../../assets/img/chaussuresHommes/hommes09.png";
import hommes10 from "../../assets/img/chaussuresHommes/hommes10.png";
import hommes11 from "../../assets/img/chaussuresHommes/hommes11.png";
import hommes12 from "../../assets/img/chaussuresHommes/hommes12.png";
import hommes13 from "../../assets/img/chaussuresHommes/hommes13.png";
import hommes14 from "../../assets/img/chaussuresHommes/hommes14.png";
import hommes15 from "../../assets/img/chaussuresHommes/hommes15.png";
import hommes16 from "../../assets/img/chaussuresHommes/hommes16.png";
import hommes17 from "../../assets/img/chaussuresHommes/hommes17.png";
import hommes18 from "../../assets/img/chaussuresHommes/hommes18.png";

import femme01 from "../../assets/img/chaussuresFemmes/femme01.png";
import femme02 from "../../assets/img/chaussuresFemmes/femme02.png";
import femme03 from "../../assets/img/chaussuresFemmes/femme03.png";
import femme04 from "../../assets/img/chaussuresFemmes/femme04.png";
import femme05 from "../../assets/img/chaussuresFemmes/femme05.png";
import femme06 from "../../assets/img/chaussuresFemmes/femme06.png";
import femme07 from "../../assets/img/chaussuresFemmes/femme07.png";

import Nav from "../../components/navigation/Nav";

gsap.registerPlugin(ScrollToPlugin);

const Home = () => {
  const panel = () => {
    gsap
      .timeline()
      .fromTo(
        "figure",
        {
          opacity: 0,
          scale: 0.1,
          y: 500,
        },

        {
          x: 0,
          y: -150,
          scale: 1,
          delay: 0,
          duration: 2,
          opacity: 1,
          ease: "power3.inOut",
          stagger: {
            each: 0.2,
            from: "random",
            grid: [5, 5],
            // repeatDelay: 10,
          },
        }
      )
      .fromTo(".containerGodasse",
      {
        opacity:0,
        scale: 0.1,

      },
      
      {
        opacity: 1,
        scale:1,
        
        duration: 2,
        delay: 0.5,
        ease: "elastic",
      })
      .to(
        ".ligne",
        {
          opacity: 1,
          x:2000,
          duration:2,
          stagger: {
            each: 0.3,
            from: "random",
            repeat:2,
            yoyo: true
          },

        },
        "<1"
      )
      .to(
        ".ligneVerticale",
        {
          opacity: 1,
          y:2000,
          duration:2,
          stagger: {
            each: 0.3,
            from: "random",
            repeat:2,
            yoyo: true
          },
          
        },
        "<1"
      )

      .to(".essaiNav", {
        opacity: 1,
        y: 0,
        duration: 1,
        delay: 0,
        ease: "power2Out",
      }, "test",
      
      )
      .to(".bienvenue",{
        y:150
      },"test")
      .to(".galeriePictures",{
        y:150,
        opacity: 0.5
      },"test")
      .to(
        ".lettre",
        {
        opacity:1,
        y: 0,
        duration: 1,
        ease: "back",
        // ease: "power3.inOut",
        stagger: {
          each: 0.1,
          from: "edges",
        },

        },
        "test"
      )

  };

  useEffect(() => {
    panel();
  }, []);

  return (
    <div className="home">
      <div className="essaiNav">
        <Nav className="navigation" />
      </div>
      <div className="containerLignes">
        <div className="ligne ligne1"></div>
        <div className="ligne ligne2"></div>
        <div className="ligne ligne3"></div>
        <div className="ligne ligne4"></div>
      </div>
      <div className="containerLignesVerticales">
        <div className="ligneVerticale"></div>
        <div className="ligneVerticale"></div>
        <div className="ligneVerticale"></div>
        <div className="ligneVerticale"></div>
      </div>
      <div className="bigContainer">
        <div className="bienvenue">
          <span className="lettre">B</span>
          <span className="lettre">I</span>
          <span className="lettre">E</span>
          <span className="lettre">N</span>
          <span className="lettre">V</span>
          <span className="lettre">E</span>
          <span className="lettre">N</span>
          <span className="lettre">U</span>
          <span className="lettre">E</span>
        </div>
        <div className="containerGodasse">
          <img src={godasses} alt="" />
        </div>
        <div className="galeriePictures">
          <figure className="gallery_item gallery_item_21">
            <img className="gallery_img_shoes" src={hommes01} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_22">
            <img className="gallery_img_shoes" src={hommes02} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_23">
            <img className="gallery_img_shoes" src={hommes03} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_24">
            <img className="gallery_img_shoes" src={hommes04} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_25">
            <img className="gallery_img_shoes" src={hommes05} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_26">
            <img className="gallery_img_shoes" src={hommes06} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_27">
            <img className="gallery_img_shoes" src={hommes07} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_28">
            <img className="gallery_img_shoes" src={hommes08} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_29">
            <img className="gallery_img_shoes" src={hommes09} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_30">
            <img className="gallery_img_shoes" src={hommes10} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_31">
            <img className="gallery_img_shoes" src={hommes11} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_32">
            <img className="gallery_img_shoes" src={hommes12} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_33">
            <img className="gallery_img_shoes" src={hommes13} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_34">
            <img className="gallery_img_shoes" src={hommes14} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_35">
            <img className="gallery_img_shoes" src={hommes15} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_36">
            <img className="gallery_img_shoes" src={hommes16} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_37">
            <img className="gallery_img_shoes" src={hommes17} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_38">
            <img className="gallery_img_shoes" src={hommes18} alt="" />
          </figure>

          {/* chaussures femmes */}
          <figure className="gallery_item gallery_item_39">
            <img className="gallery_img_shoes" src={femme01} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_40">
            <img className="gallery_img_shoes" src={femme02} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_41">
            <img className="gallery_img_shoes" src={femme03} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_42">
            <img className="gallery_img_shoes" src={femme04} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_43">
            <img className="gallery_img_shoes" src={femme05} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_44">
            <img className="gallery_img_shoes" src={femme06} alt="" />
          </figure>
          <figure className="gallery_item gallery_item_45">
            <img className="gallery_img_shoes" src={femme07} alt="" />
          </figure>
        </div>
      </div>
    </div>
  );
};

export default Home;
