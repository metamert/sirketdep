import React from 'react';
import './pricingcart.styles.css'
import { motion } from "framer-motion";
import Grid from '@material-ui/core/Grid'
const PricingCart = () =>{
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
    
    
    return(
    
    <Grid container className="pricing-card-area" >



                    <Grid item  md={3} xs={6} className='card'>
                    <motion.ul
    
    variants={container2}
    initial="hidden"
    animate="visible"
  >
                        <div className="single-card text-center mb-30">
                            <div className="card-top">
                                <span>2 Years</span>
                                <h4>$05 <span>/ month</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>Increase traffic 50%</li>
                                    <li>E-mail support</li>
                                    <li>10 Free Optimization</li>
                                    <li>24/7  support</li>
                                </ul>
                                <a href="services.html" className="btn card-btn1" style={{color:"white"}} >Get Started</a>
                            </div>
                        </div>
                        </motion.ul>
                    </Grid>

                    
         
                    <Grid item md={3} xs={6} className='ortanca'>
         
                    <motion.ul
    
    variants={container}
    initial="hidden"
    animate="visible"
  >
         
                        <div className="single-card  text-center mb-30">
                            <div className="card-top">
                                <span>2 Years</span>
                                <h4>PRO</h4>
                                <h4>$05 <span>/ month</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>Increase traffic 50%</li>
                                    <li>E-mail support</li>
                                    <li>10 Free Optimization</li>
                                    <li>24/7  support</li>
                                </ul>
                                <a href="services.html" className="btn card-btn1" style={{color:"white"}} >Get Started</a>
                            </div>
                        </div>
                        </motion.ul>
                    </Grid>
            
    
        
                    <Grid item md={3} xs={6} className='card'>
    
                    <motion.ul
    
    variants={container3}
    initial="hidden"
    animate="visible"
  >
    
                        <div className="single-card text-center mb-30">
                            <div className="card-top">
                                <span>2 Years</span>
                                <h4>$05 <span>/ month</span></h4>
                            </div>
                            <div className="card-bottom">
                                <ul>
                                    <li>Increase traffic 50%</li>
                                    <li>E-mail support</li>
                                    <li>10 Free Optimization</li>
                                    <li>24/7  support</li>
                                </ul>
                                <a href="services.html" className="btn card-btn1" style={{color:"white"}} >Get Started</a>
                            </div>
                        </div>
                        </motion.ul>
                    </Grid>
                    
        </Grid>
)}
export default PricingCart;