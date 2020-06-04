import React from "react"
import {
  
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    CardTitle,
    ListGroupItem,
    ListGroup,
    Container,
    Row,
    Col
  } from "reactstrap";
  import "./.css"
import bir from "../../assets/img/path5.png"
import bir2 from "../../assets/img/chester-wade.jpg"
import F from "../bananas/index"

const C=()=>{

return(
    <section className="section section-lg section-safe" style={{marginTop:50,marginBottom:50}}>
    <img
      alt="..."
      className="path"
      src={bir}
    />
    <Container>
      <Row className="row-grid justify-content-between">
       
        <Col md="12">
          <div className="px-md-5">
            <hr className="line-success" />
          <F></F>
            
          </div>
        </Col>
      </Row>
    </Container>
  </section>



)

}


export default C