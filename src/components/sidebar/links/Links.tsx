import React from 'react';
import {motion} from 'framer-motion';
import HomeIcon from '@mui/icons-material/Home';
import WorkIcon from '@mui/icons-material/Work';
import PhotoLibraryIcon from '@mui/icons-material/PhotoLibrary';
import EmailIcon from '@mui/icons-material/Email';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';

const Links = () => {
    const variants = {
        open: {
            transition: {
                staggerChildren: 0.1,
            },
        },
        closed: {
            transition: {
                staggerChildren: 0.05,
                staggerDirection: -1,
            },
        },
    };

    const itemVariants = {
        open: {
            y: 0,
            opacity: 1,
        },
        closed: {
            y: 50,
            opacity: 0,
        },
    };

    const items = [
        {name: 'HomePage', icon: <HomeIcon/>},
        {name: 'Services', icon: <WorkIcon/>},
        {name: 'Portfolio', icon: <PhotoLibraryIcon/>},
        {name: 'Contact', icon: <EmailIcon/>},
        {name: 'About', icon: <AccountCircleIcon/>},
        {name: 'Logout', icon: <LogoutIcon/>},
    ];

    return (
        <motion.div className="links" variants={variants} initial="closed" animate="open">
            {items.map((item) => (
                <motion.div key={item.name} className="link-item" variants={itemVariants} whileHover={{scale: 1.1}} whileTap={{scale:0.9}}>
                    {item.icon}
                    <a href={`#${item.name}`}>{item.name}</a>
                </motion.div>
            ))}
        </motion.div>
    );
};

export default Links;
