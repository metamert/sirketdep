import React from "react";
import PagesCart from "../../components/PagesCard/pages-card.component";
import './pages-page.styles.css'
import Grid from '@material-ui/core/Grid'
import {firestore} from '../../firebase/firebase.utils'
import "./pages-page.styles.css";


const PagesPage = () => {
    const [siteler,setSiteler] = React.useState([]) ;
    React.useEffect(() => {
        let array = []
        firestore.collection('siteler').get().then(snapshot => {
        snapshot.docs.forEach(doc => {
          array.push(doc.data())
        })
        console.log(array)
        setSiteler(array)
        })
    },[])

    return (<Grid container className='pagespage' style={{marginBottom:50}}>
            {siteler.map(dosya => <Grid item  className = 'cartlar' lg={6}> 
            <PagesCart siteler={dosya} />
            </Grid>)}
    </Grid>
    )
}


export default PagesPage;