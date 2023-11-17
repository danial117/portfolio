import React, {useRef} from 'react';
import './portfolio.scss';
import {motion, useScroll, useSpring, useTransform} from 'framer-motion';

interface PortfolioItem {
    id: number;
    title: string;
    img: string;
    desc: string;
}

interface SingleProps {
    item: PortfolioItem;
}

const Single: React.FC<SingleProps> = ({item}) => {

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        // offset:["start start","end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [-300, 100])
    return (
        <section >
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref} >
                        <img src={item.img} alt={item.title}/>
                    </div>

                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button>See Demo</button>
                    </motion.div>
                </div>

            </div>


        </section>
    );
};

const Portfolio: React.FC = () => {
    const items: PortfolioItem[] = [
        {
            id: 1,
            title: 'E-Commerce',
            img: require('../projectImg/Screenshot (424).png'),
            desc:
                'A sophisticated e-commerce platform with a user-friendly interface. Explore a wide range of products and enjoy a seamless shopping experience.',
        },
        {
            id: 2,
            title: 'Blogging App',
            img: require('../projectImg/Screenshot (425).png'),
            desc:
                'Share your thoughts and ideas with the world through our intuitive blogging application. Engage with a community of like-minded individuals.',
        },
        {
            id: 3,
            title: 'Contact Management',
            img: require('../projectImg/Screenshot (426).png'),
            desc:
                'Efficiently organize and manage your contacts with our Contact Management application. Streamline communication and stay connected.',
        },
        {
            id: 4,
            title: 'Employee Management',
            img: require('../projectImg/Screenshot (427).png'),
            desc:
                'Simplify employee management tasks with our comprehensive Employee Management system. Keep track of personnel information and enhance HR processes.',
        },
    ];

    const ref = useRef<HTMLDivElement>(null);

    const {scrollYProgress} = useScroll({
        target: ref,
        offset: ['end end', 'start start'],
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30
    })

    return (
        <div className={'portfolio'}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX: scaleX}} className="progressBar">
                    {/* You can use scrollYProgress here */}</motion.div>
            </div>
            {items.map((item) => (
                <Single item={item} key={item.id}/>
            ))}
        </div>
    );
};

export default Portfolio;
