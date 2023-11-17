import React from 'react';
import "./navbar.scss";
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import YouTubeIcon from '@mui/icons-material/YouTube';
import EmailIcon from '@mui/icons-material/Email';
import { motion } from "framer-motion";
import Sidebar from "../sidebar/Sidebar";

const Navbar = () => {

    const handleClick = () => {
        console.log('Social icon clicked!');
    };

    return (
        <div className="navbar">
            {/*  SideBar*/}
            <Sidebar/>

            <div className="wrapper">
                <motion.span initial={{opacity:0, scale:0.5}} animate={{opacity:1, scale:1}} transition={{duration:0.5}} className="font-bold">Muneeb Q</motion.span>

                <div className="social" onClick={handleClick}>
                    <a href="https://www.facebook.com/muneebhaidershafique?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <FacebookIcon />
                    </a>
                    <a href="https://www.instagram.com/muneebqureshi90/?igshid=OGQ5ZDc2ODk2ZA%3D%3D" target="_blank" rel="noopener noreferrer">
                        <InstagramIcon />
                    </a>
                    <a href="https://www.youtube.com/@muneebqureshi90/" target="_blank" rel="noopener noreferrer">
                        <YouTubeIcon />
                    </a>
                    <a href="mailto:muneebhaider564@gmail.com" target="_blank" rel="noopener noreferrer">
                        <EmailIcon />
                    </a>
                </div>

            </div>
        </div>
    );
};

export default Navbar;
