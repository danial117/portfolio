import React, {useRef} from 'react';
import {motion, useInView} from "framer-motion";
import './service.scss';

const variants = {
    initial: {
        x: -500,
        y: 100,
        opacity: 0
    },
    animate: {
        x: 0,
        y: 0,
        opacity: 1,
        transition: {
            duration: 1,
            staggerChildren: 0.1
        }
    }
}

function Service() {

    const ref = useRef<HTMLDivElement>(null); // Add type HTMLDivElement here
    const isInView = useInView(ref, {margin: '-100px'});


    return (
        <motion.div className={'service'} variants={variants} initial={"initial"}
            // animate={"animate"}
            // whileInView={"animate"}
                    ref={ref}
                    animate={isInView && "animate"}
        >
            <motion.div className="textContainer" variants={variants}>
                <motion.p>"I'm dedicated to supporting you in the
                    successful execution of your <br/>development projects,
                    ensuring your company's= vision<br/> comes to life through expertly crafted solutions."
                </motion.p>
                <hr/>
            </motion.div>
            <motion.div className="titleContainer" variants={variants}>
                <div className="title">
                    <img src={require('../../icons/people.webp')} alt="Description of the image"/>
                    <h1><motion.strong whileHover={{color:"orange"}}>Unique</motion.strong> Ideas </h1>
                </div>

                <div className="title">
                    <h1><motion.strong whileHover={{color:"orange"}}>For Your</motion.strong> Business. </h1>
                    <button onClick={() => window.location.href = 'mailto:muneebhaider564@gmail.com'}>What We Do?</button>
                </div>


            </motion.div>
            <motion.div className="listContainer" variants={variants}>
                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Web Development</h2>
                    <p>
                        With a focus on creating seamless and responsive web applications, I specialize in full-stack
                        web
                        development. Utilizing technologies such as React.js for the frontend and Spring Boot for the
                        backend,
                        I deliver cutting-edge solutions to elevate your online presence.
                    </p>
                    <button onClick={() => window.location.href = 'mailto:muneebhaider564@gmail.com'}>Lets Go</button>
                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Database Management</h2>
                    <p>
                        As a database expert, I excel in designing, implementing, and optimizing databases. Whether it's
                        SQL or
                        NoSQL databases, I ensure efficient data storage and retrieval, providing a solid foundation for
                        your
                        applications.
                    </p>
                    <button onClick={() => window.location.href = 'mailto:muneebhaider564@gmail.com'}>Lets Go</button>

                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Mobile App Development</h2>
                    <p>
                        Transform your ideas into engaging mobile experiences. With proficiency in mobile app
                        development
                        frameworks like React Native, I create cross-platform applications that run seamlessly on both
                        iOS and
                        Android devices.
                    </p>
                    <button onClick={() => window.location.href = 'mailto:muneebhaider564@gmail.com'}>Lets Go</button>

                </motion.div>

                <motion.div className="box" whileHover={{background: "lightgray", color: "black"}}>
                    <h2>Agile Project Management</h2>
                    <p>
                        Beyond coding, I bring expertise in Agile project management methodologies. Ensuring efficient
                        collaboration, timely deliveries, and iterative development, I guarantee a smooth and successful
                        project
                        execution.
                    </p>
                    <button onClick={() => window.location.href = 'mailto:muneebhaider564@gmail.com'}>Lets Go</button>

                </motion.div>
            </motion.div>

        </motion.div>
    );
}

export default Service;
