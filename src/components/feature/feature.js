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
    <section className="section section-lg section-safe" style={{marginTop:120,marginBottom:50}}>
    <img
      alt="..."
      className="path"
      src={bir}
    />
    <Container>
      <Row className="row-grid justify-content-between">
        <Col md="5">
          <img
            alt="..."
            className="img-fluid floating"
            src={bir2}
          />
          <Card className="card-stats bg-danger">
            <CardBody>
              <div className="justify-content-center">
                <div className="numbers">
                  <CardTitle tag="h2">100%</CardTitle>
                  <h2 className="card-category text-white">Safe</h2>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="card-stats bg-info">
            <CardBody>
              <div className="justify-content-center">
                <div className="numbers">
                  <CardTitle tag="h2">Fully</CardTitle>
                  <h2 className="card-category text-white">
                    Modern
                  </h2>
                </div>
              </div>
            </CardBody>
          </Card>
          <Card className="card-stats bg-default">
            <CardBody>
              <div className="justify-content-center">
                <div className="numbers">
                  <h4>++</h4>
                  <h3 className="card-category text-white">Fasttt</h3>
                </div>
              </div>
            </CardBody>
          </Card>
        </Col>
        <Col md="6">
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