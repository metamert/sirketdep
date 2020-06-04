import React from 'react'
import {Grid} from "@material-ui/core"
import img from "../assets/img/ani/c1.png"
import img2 from "../assets/img/ani/c2.png"
import img3 from "../assets/img/ani/c3.png"

import { motion } from "framer-motion";

export default function galery() {

    const container = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };

      const container2 = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 1.5,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };
      const container3 = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            delay: 2,
            when: "beforeChildren",
            staggerChildren: 0.1
          }
        }
      };



    return (
  
            <Grid container spacing={0}>
<Grid item xs={4}>
<motion.ul
   
    variants={container}
    initial="hidden"
    animate="visible"
  >
       
    
    <img src={img}></img>
    
    </motion.ul>
    </Grid>
    <Grid item xs={4}>
<motion.ul
    
    variants={container2}
    initial="hidden"
    animate="visible"
  >
       
    
    <img src={img2}></img>
    
    </motion.ul>
    </Grid>
    <Grid item xs={4}>
<motion.ul
    
    variants={container3}
    initial="hidden"
    animate="visible"
  >
       
    
    <img src={img3}></img>
    
    </motion.ul>
    </Grid>
            </Grid>
       
    )
}
