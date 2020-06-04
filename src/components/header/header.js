import React from "react"
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import { FaApple,FaMailBulk,FaSignOutAlt,FaHome ,FaSearchengin} from "react-icons/fa";
import ListItem from "@material-ui/core/ListItem";
import {Link} from 'react-router-dom';
// core components
import Header from "./header.ui.js";


import Button from "../CustomButtons/Button";



import styles from "./navbarsStyle.js";

const useStyles = makeStyles(styles);

const HHeader=(props)=>{
  const classes = useStyles();
  return(
<Header
   
    color="white"
    fixed
    changeColorOnScroll={{
        height: 400,
        color: "white"
      }}

    rightLinks={
      <List className={classes.list}>
        <ListItem className={classes.listItem}>
        <Link
            
            className={classes.navLink}
            
            color="transparent"
            to="/"
            
          >
            Home
            <FaHome style={{marginLeft:5}}></FaHome>
          </Link>
        
        
        
         
        
        </ListItem>
        <ListItem className={classes.listItem}>
        
        <Link
            className={classes.navLink}
            color="transparent"
            to="/pages"
          >
            
            Pages
            <FaSearchengin style={{marginLeft:5,marginBottom:2}}></FaSearchengin>
          </Link> 
         
         
         
         
        </ListItem>
        <ListItem className={classes.listItem}>
        <Link
            className={classes.navLink}
            color="transparent"
            to="/contact"
          >
            
            Contact
            <FaMailBulk style={{marginLeft:5,marginBottom:2}}></FaMailBulk>
          </Link>
        
       
        </ListItem>
        <ListItem className={classes.listItem}>
        
        </ListItem>
        <ListItem className={classes.listItem}>
         
        </ListItem>
      </List>
    }
  />

)


}






export default HHeader;