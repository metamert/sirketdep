import React from 'react'
import Grid from '@material-ui/core/Grid';
import img from '../../../assets/img/hero/hero_right.png'
import './home.styles.css'
import { motion } from "framer-motion";

const Home1 = () =>{  
    
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

      const item = {
        hidden: { y: 20, opacity: 0 },
        visible: {
          y: 0,
          opacity: 1
        }
      };

    
    return(



<div className='home1'  style={{marginTop:120}}>
    <Grid container >
    <Grid container lg={6} ms={6} xs={12} alignItems="center">
    <motion.ul
    className="container"
    variants={container}
    initial="hidden"
    animate="visible"
  >
       
        <Grid item className='itemler' justify='center' >
        <motion.li  variants={item} >
            <h1 class="deneme2" >Move Your Business<br/>to App with Us</h1>
            </motion.li>
            <motion.li  variants={item} >
            <p>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
            </motion.li>
            <motion.li  variants={item} >
            <a href="industries.html" class="btn radius-btn"  style={{color:"white",margin:30}} >Get Started</a>
            </motion.li>
        </Grid>
        </motion.ul>
    </Grid>
    <Grid container justify='center' lg={6} ms={6} xs={12}>
    <motion.div
    
    initial={{ scale: 0 }}
    animate={{ rotate: 180, scale: 1 }}
    transition={{
      type: "spring",
      stiffness: 260,
      delay:1,
      damping: 20
    }}
  >
            <img src={img} alt=""/>
            </motion.div>     
    </Grid>
</Grid>
    </div>
)}
export default Home1;