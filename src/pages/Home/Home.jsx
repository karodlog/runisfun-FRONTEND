import React, { useEffect } from "react";

import gsap from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

import logoRunIsFun from "../../assets/logos/run-is-fun-vector-NEG++.png";

import photo01 from "../../assets/img/photo01.jpg";
import photo02 from "../../assets/img/photo02.jpg";
import photo03 from "../../assets/img/photo03.jpg";
import photo04 from "../../assets/img/photo04.jpg";
import photo05 from "../../assets/img/photo05.jpg";
import photo06 from "../../assets/img/photo06.jpg";
import photo07 from "../../assets/img/photo07.jpg";
import photo08 from "../../assets/img/photo08.jpg";
import photo09 from "../../assets/img/photo09.jpg";
import photo10 from "../../assets/img/photo10.jpg";
import photo11 from "../../assets/img/photo11.jpg";
import photo12 from "../../assets/img/photo12.jpg";
import photo13 from "../../assets/img/photo13.jpg";
import photo14 from "../../assets/img/photo14.jpg";
import photo15 from "../../assets/img/photo15.jpg";
import photo16 from "../../assets/img/photo16.jpg";
import photo17 from "../../assets/img/photo17.jpg";
import photo18 from "../../assets/img/photo18.jpg";
import photo19 from "../../assets/img/photo19.jpg";
import photo20 from "../../assets/img/photo20.jpg";

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
import femme08 from "../../assets/img/chaussuresFemmes/femme08.png";
import femme09 from "../../assets/img/chaussuresFemmes/femme09.png";
import femme10 from "../../assets/img/chaussuresFemmes/femme10.png";
import femme11 from "../../assets/img/chaussuresFemmes/femme11.png";
import femme12 from "../../assets/img/chaussuresFemmes/femme12.png";


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
                },
                
                {
                  scale: 1,
                  delay:2,
                  duration: 3,
                  opacity: 1,
                  // ease: "bounce.out",
                  ease: "power3.inOut",
                  stagger: {
                    each: 0.1,
                    from: "random",
                    grid:[8,9],
                    repeatDelay: 2,
                    // repeat:-1,
                    // yoyo: true,
                  },
                }
              )
              // .to(
              //   ".galeriePictures",
              //   {
              //     x:3000,
              //     delay:2,
              //     duration: 2
              //   }
              // )
          };
        
          useEffect(() => {
            panel()
          }, []);
    
    
    
  return (
    <div className="home">
        {/* <button id="btnCurieux" onClick={panel}>Pour Jérémy</button> */}
        <div className="logoRunISFun">
          <img className="logoAnimated" src={logoRunIsFun} alt="" />
        </div>
      <div className="galeriePictures">

        {/* photos génériques */}
        <figure className="gallery_item gallery_item_1">
          <img className="gallery_img" src={photo01} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_2">
          <img className="gallery_img" src={photo02} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_3">
          <img className="gallery_img" src={photo03} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_4">
          <img className="gallery_img" src={photo04} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_5">
          <img className="gallery_img" src={photo05} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_6">
          <img className="gallery_img" src={photo06} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_7">
          <img className="gallery_img" src={photo07} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_8">
          <img className="gallery_img" src={photo08} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_9">
          <img className="gallery_img" src={photo09} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_10">
          <img className="gallery_img" src={photo10} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_11">
          <img className="gallery_img" src={photo11} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_12">
          <img className="gallery_img" src={photo12} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_13">
          <img className="gallery_img" src={photo13} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_14">
          <img className="gallery_img" src={photo14} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_15">
          <img className="gallery_img" src={photo15} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_16">
          <img className="gallery_img" src={photo16} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_17">
          <img className="gallery_img" src={photo17} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_18">
          <img className="gallery_img" src={photo18} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_19">
          <img className="gallery_img" src={photo19} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_20">
          <img className="gallery_img" src={photo20} alt="" />
        </figure>

        {/* chaussures hommes */}
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
        <figure className="gallery_item gallery_item_46">
          <img className="gallery_img_shoes" src={femme08} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_47">
          <img className="gallery_img_shoes" src={femme09} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_48">
          <img className="gallery_img_shoes" src={femme10} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_49">
          <img className="gallery_img_shoes" src={femme11} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_50">
          <img className="gallery_img_shoes" src={femme12} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_51">
          <img className="gallery_img" src={photo13} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_52">
          <img className="gallery_img" src={photo11} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_53">
          <img className="gallery_img" src={photo12} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_54">
          <img className="gallery_img" src={photo03} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_55">
          <img className="gallery_img" src={photo04} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_56">
          <img className="gallery_img" src={photo05} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_57">
          <img className="gallery_img" src={photo01} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_58">
          <img className="gallery_img" src={photo02} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_59">
          <img className="gallery_img" src={photo10} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_60">
          <img className="gallery_img" src={photo14} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_61">
          <img className="gallery_img" src={photo08} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_62">
          <img className="gallery_img_shoes" src={hommes08} alt="" />
        </figure>
        <figure className="gallery_item gallery_item_63">
          <img className="gallery_img_shoes" src={femme01} alt="" />
        </figure>












      </div>
    </div>
  );
};

export default Home;
