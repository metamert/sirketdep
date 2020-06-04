import React from 'react'
import Grid from '@material-ui/core/Grid';
import img from '../../../assets/img/hero/hero_right.png'
import './home.styles.css'
const Home1 = () => (
    <div className='home1'  style={{marginTop:120}}>
    <Grid container >
    <Grid container lg={6} ms={6} xs={12} alignItems="center">
        <Grid item className='itemler' justify='center' >
            
            <h1 class="deneme2" >Move Your Business<br/>to App with Us</h1>
            <p>Dorem ipsum dolor sitamet, consectetur adipiscing elit, sed do eiusm tempor incididunt ulabore et dolore magna aliqua.</p>
            <a href="industries.html" class="btn radius-btn"  style={{color:"white",margin:30}} >Get Started</a>
        </Grid>
    </Grid>
    <Grid container justify='center' lg={6} ms={6} xs={12}>
        
            <img src={img} alt=""/>
        
    </Grid>
</Grid>
    </div>
)
export default Home1;