import React, {useState} from 'react';
import './App.css';
import './app.scss';
import {motion, spring} from "framer-motion";
import {duration} from "@mui/material";

function Test() {
    const variants = {
        // visible: { opacity: 1, x: 100, transition: { type: "spring", stiffness: 100, damping: 100 } },
        visible: (i: number) => ({ opacity: 1, x: 100, transition: { delay: i * 0.3 } }),
        hidden: { opacity: 0 }
    }

    // const [open, setOpen] = useState(false);

    const items = [
        "item1", "item2", "item3", "item4"
    ]

    return (
        <div className="course">
            <motion.ul initial={"hidden"} animate={"visible"} variants={variants}>
                {items.map((item, index) => (
                    <motion.li variants={variants} key={item} custom={index}>
                        {item}
                    </motion.li>
                ))}
            </motion.ul>

            {/* <button onClick={() => setOpen(prev => !prev)}>Click</button> */}
        </div>
    );
}

export default Test;



// For Practice

// <div className="course">
//     <motion.div className="box"
//
//         // initial={{opacity: 0.5, scale: 0.5}} // Initial state
//         // animate={{ opacity: 1, scale: 1 , x:200,y:500}} // Target state
//         // transition={{duration: 2}} // Animation duration
//         // whileHover={{opacity:1,scale:2 }}
//
//                 variants={variants}
//         // initial={"hidden"}
//         // animate={"visible"}
//                 transition={{duration: 2}} // Animation duration
//
//                 animate={open ? "visible":"hidden"}
//     >
//         {/* Content */}
//     </motion.div>
//
//     <button onClick={()=>setOpen(prev=>!prev)}>Click</button>
// </div>