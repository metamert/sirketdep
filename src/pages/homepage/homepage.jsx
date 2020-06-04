
import './homepage.style.css'
import Home2 from '../../components/homepagecomponent/home2/home2.component'
import C from "../../components/feature/feature"
import React from 'react'
import Home1 from '../../components/homepagecomponent/home/home.component'
import PricingCart from '../../components/PricingCart/pricingcart.component'

import List from "../../components/list"
 const Homepage = () => ( 

        <div >
            <Home1 />
         
       
           <C></C>
           <List></List>
            <PricingCart/>
        </div>
)

export default Homepage;