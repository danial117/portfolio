import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import './hero.scss';

function Hero() {
    const [textIndex, setTextIndex] = useState(0);
    const words = [
        'J', 'a', 'v', 'a', '   ', 'D', 'e', 'v', 'e', 'l', 'o', 'p', 'e', 'r', '   ', 'w', 'i', 't', 'h', '   ', 'e', 'x', 'p', 'e', 'r', 't', 'i', 's', 'e', '   ', 'i', 'n', '   ', 'S', 'p', 'r', 'i', 'n', 'g', '   ', 'B', 'o', 'o', 't', '   ', 'R', 'e', 'a', 'c', 't', '.', 'j', 's', '   ', 'D', 'a', 't', 'a', 'b', 'a', 's', 'e', '   ', 'a', 'n', 'd', '   ', 'm', 'o', 'r', 'e'
    ];

    const textVariants = {
        initials: {
            x: -500,
            opacity: 0,
        },
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1,
            },
        },
        scrollButton: {
            opacity: 0,
            y: 10,
            transition: {
                duration: 2,
                repeat: Infinity,
            },
        },
    };

    const slideVariants = {
        initials: {
            x: 0,
        },
        animate: {
            x: '-200%',
            transition: {
                duration: 20,
                repeat: Infinity,
                repeatType: 'mirror' as const, // Correct the type here
            },
        },
    };

    useEffect(() => {
        const interval = setInterval(() => {
            setTextIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 130);

        return () => clearInterval(interval);
    }, []);

    return (
        <div className="hero">
            <div className="wrapper">
                <motion.div className="textContainer" variants={textVariants} initial="initials" animate="animate">
                    <motion.h2 variants={textVariants}>Muneeb Qureshi</motion.h2>
                    <motion.h1 variants={textVariants}>{words.slice(0, textIndex + 1).join('')}</motion.h1>
                    <motion.div className="button" variants={textVariants}>
                        <motion.button variants={textVariants}>
                            See the Latest Work
                        </motion.button>
                        <motion.button variants={textVariants}>
                            Get in Touch
                        </motion.button>
                    </motion.div>
                    <motion.img animate="scrollButton" variants={textVariants} src={require('../../icons/scroll.png')} alt="Description of the image" />
                </motion.div>
                <motion.div className="slidingTextContainer" variants={slideVariants} initial="initials" animate="animate">
                   {/*"Developer"*/}
                   {/* "Skilled React developers and Java Spring Boot experts for cutting-edge web development."*/}
                </motion.div>
                <motion.div className="image-container" variants={textVariants}>
                    <img src={require('../../icons/WhatsApp_Image_2023-01-31_at_18.37.55-removebg-preview.png')} alt="Description of the image" />
                </motion.div>
            </div>
        </div>
    );
}

export default Hero;
