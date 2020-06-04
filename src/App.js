import React from 'react';
import './App.css';
import HHeader from './components/header/header';
import Homepage from './pages/homepage/homepage'
import 'bootstrap/dist/css/bootstrap.min.css';
import PagesPage from './pages/pages-page/pages-page.component'
import { Switch , Route } from 'react-router-dom';
import ContactUs from './pages/contactpage/contactpage.component'
const App = () => {

    return (<div className='body'>
      <HHeader/>
      <Switch>
        <Route exact path = '/' component = {Homepage} />
        <Route path = '/pages' component={PagesPage}/>
        <Route path = '/contact' component={ContactUs}/>
      </Switch>
     
    </div>);

}

export default App;
