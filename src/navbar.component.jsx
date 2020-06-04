import React from 'react';
import './deneme.css'

const navbar = () => (
    <header>
    
        
       <div className="header-area header-transparrent ">
            <div className="main-header header-sticky sticky-bar sticky">
                <div className="container">
                    <div className="row align-items-center">
                      
                        <div className="col-xl-2 col-lg-2 col-md-2">
                            <div className="logo">
                                <a href="index.html"><img src="assets/img/logo/logo.png" alt=""/></a>
                            </div>
                        </div>
                        <div className="col-xl-10 col-lg-10 col-md-10">
                            
                            <div className="main-menu f-right d-none d-lg-block">
                                <nav>
                                    <ul id="navigation">    
                                        <li class="active"><a href="index.html"> Home</a></li>
                                        <li><a href="feature.html">Feature</a></li>
                                        <li><a href="services.html">Services</a></li>
                                        <li><a href="pricing.html">Pricing</a></li>
                                        <li><a href="#">Pages</a>
                                            <ul class="submenu">
                                                <li><a href="blog.html">Blog</a></li>
                                                <li><a href="single-blog.html">Blog Details</a></li>
                                                <li><a href="elements.html">Element</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html">Contact</a></li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        
                        <div class="col-12">
                            <div class="mobile_menu d-block d-lg-none"><div class="slicknav_menu"><a href="#" aria-haspopup="true" role="button" tabindex="0" class="slicknav_btn slicknav_collapsed" style="outline: none;"><span class="slicknav_menutxt">MENU</span><span class="slicknav_icon"><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span><span class="slicknav_icon-bar"></span></span></a><ul class="slicknav_nav slicknav_hidden" aria-hidden="true" role="menu" style="display: none;">    
                                        <li class="active"><a href="index.html" role="menuitem" tabindex="-1"> Home</a></li>
                                        <li><a href="feature.html" role="menuitem" tabindex="-1">Feature</a></li>
                                        <li><a href="services.html" role="menuitem" tabindex="-1">Services</a></li>
                                        <li><a href="pricing.html" role="menuitem" tabindex="-1">Pricing</a></li>
                                        <li class="slicknav_collapsed slicknav_parent"><a href="#" role="menuitem" aria-haspopup="true" tabindex="-1" class="slicknav_item slicknav_row" style="outline: none;"><a href="#" tabindex="-1">Pages</a>
                                            <span class="slicknav_arrow">+</span></a><ul class="submenu slicknav_hidden" role="menu" aria-hidden="true" style="display: none;">
                                                <li><a href="blog.html" role="menuitem" tabindex="-1">Blog</a></li>
                                                <li><a href="single-blog.html" role="menuitem" tabindex="-1">Blog Details</a></li>
                                                <li><a href="elements.html" role="menuitem" tabindex="-1">Element</a></li>
                                            </ul>
                                        </li>
                                        <li><a href="contact.html" role="menuitem" tabindex="-1">Contact</a></li>
                                    </ul></div></div>
                        </div>
                    </div>
                </div>
            </div>
       </div>
         
    
       </header>
)
export default navbar;