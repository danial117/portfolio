import React, {useRef} from 'react';
import './parallax.scss';
import {motion, useScroll, useTransform} from 'framer-motion';

interface ParallaxProps {
    type: string;
}

function Parallax({type}: ParallaxProps) {
    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ["start start", "end start"]
    });

    const yText = useTransform(scrollYProgress, [0, 1], ['0%', '500%']);
    const yBg = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

    return (
        <div
            className="parallax"
            ref={ref}
            style={{
                background: type === 'services' ? 'linear-gradient(180deg, #111132, #0c0c1d)' : 'linear-gradient(180deg, #111132, #505064)',
            }}
        >
            <motion.div  className="mountains">
                <img src={require('../../icons/mountains.png')} alt="Description of the image"/>

            </motion.div>
            <motion.div style={{ y: yBg }} className="planets">
                {type === 'services' ? (
                    <img src={require('../../icons/planets.png')} alt="Description of the image" />
                ) : (
                    <img src={require('../../icons/sun.png')} alt="Description of the image" />
                )}
            </motion.div>
            <motion.div style={{x: yBg}} className="stars">
                <img src={require('../../icons/stars.png')} alt="Description of the image" />

            </motion.div>
            <motion.h1 style={{y: yText}}>{type === 'services' ? 'What We DO ?' : 'What We Did?'}</motion.h1>

        </div>
    );
}

export default Parallax;
