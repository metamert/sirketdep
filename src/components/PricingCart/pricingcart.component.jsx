import React from 'react';
import './pricingcart.styles.css'
import Grid from '@material-ui/core/Grid'
const PricingCart = () => (
    
    <Grid container className="pricing-card-area" >
                    <Grid item  md={3} xs={6} className='card'>
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
                    </Grid>
                    <Grid item md={3} xs={6} className='ortanca'>
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
                    </Grid>
                    <Grid item md={3} xs={6} className='card'>
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
                    </Grid>
        </Grid>
)
export default PricingCart;