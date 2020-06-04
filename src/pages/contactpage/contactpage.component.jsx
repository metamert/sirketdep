import React from 'react';
import emailjs from 'emailjs-com';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import './contact.styles.css'
const ContactUs = () => {

  function sendEmail(e) {
    e.preventDefault();

    emailjs.sendForm('gmail', 'template_zEgEtZYo', e.target, 'user_VWDIMfe9wi9riTh8JxtmA')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  }

  return (
   <form className='contact' onSubmit={sendEmail}>
    <React.Fragment>
      <Typography variant="h6" gutterBottom>
        Contact Us
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12 }  >
          <TextField
          className='email'  
            required
            id="firstName"
            name="user_name"
            label="First name"
            
          />
        </Grid>
        <Grid item xs={12} className='email'>
          <TextField
          
            required
            className='email'
            id="email"
            name="user_email"
            label="Email"
          />
        </Grid>
        <Grid item xs={12} >
          <TextField
            required
            multiline
            rows={5}
            className='mesaj'
            id="standard-multiline-static"
            name="message"
            label="Message"
          />
        </Grid>
        <input type="submit"  className="bt radius-bt" value="Send" />
      </Grid>
    </React.Fragment>
    </form>
  );
}
export default ContactUs;