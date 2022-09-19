import React from 'react';
import logoInstagram from '../../assets/logos/instagram NEG.png';
import logoFacebook from '../../assets/logos/facebook NEG.png';
import logoReact from '../../assets/logos/4691292_react native_react_icon.png'
import logoJavascript from '../../assets/logos/9035061_logo_javascript_icon.png'
import logoCSS from '../../assets/logos/7422531_css3_css_file_development_icon.png'
import logoHTML from '../../assets/logos/367627_html_html5_icon.png'
import logoNode from '../../assets/logos/9035101_logo_nodejs_icon.png'
import logoPhotoshop from '../../assets/logos/104816_photoshop_icon.png'
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
    return (
        <div className='containerFooter'>
            <div className="container-text">
                <div className="text text1">
                    <p><span className='gras'>Lorem ipsum</span> dolor sit amet consectetur adipisicing elit. Eius in possimus laudantium cumque nisi omnis, <span className='gras'>deserunt odio quod?</span> Corporis illum ullam iste quas excepturi veritatis tenetur ab, veniam ex omnis!</p>
                    <br />
                    <div className="logoReseaux appli">
                        <img style={{height:"43px"}} src={logoReact} alt="" />
                        <img style={{height:"40px"}} src={logoJavascript} alt="" />
                        <img style={{height:"48px"}} src={logoCSS} alt="" />
                        <img style={{height:"40px"}} src={logoHTML} alt="" />
                        <img style={{height:"40px"}} src={logoNode} alt="" />
                        <img style={{height:"40px"}} src={logoPhotoshop} alt="" />
                    </div>
                </div>
                <div className="text text2">
                    <p>Lorem ipsum dolor sit amet <strong className='gras'>consectetur adipisicing</strong> elit. Eius in possimus laudantium cumque nisi omnis, deserunt odio quod? Corporis illum ullam iste quas excepturi veritatis tenetur ab, veniam ex omnis!</p>
                    <br />
                    <p className='copyright'><span>©</span> 2022 /tous droits réservés</p>
                </div>
                <div className="text text3">
                    <p>Lorem ipsum <span className='gras'>dolor sit amet</span> consectetur adipisicing elit. Eius in possimus laudantium cumque nisi omnis, deserunt odio quod? Corporis illum ullam iste quas excepturi <span className='gras'>veritatis</span> tenetur ab, veniam ex omnis!</p>
                    <br />
                    <div className="logoReseaux">
                        <img style={{height:"43px"}} src={logoInstagram} alt="" />
                        <img style={{height:"40px"}} src={logoFacebook} alt="" />
                    </div>
                </div>

            </div>
            
        </div>
    );
};

export default Footer;