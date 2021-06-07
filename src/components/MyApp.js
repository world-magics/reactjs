
import React from 'react'; 
import './style.css';
import { Alert, Col, Container, Row } from 'reactstrap';


class MyApp extends React.Component{
  render(){
    return(
        <>
            <h1 className="first1">React ...React</h1>
              <p>lorem ipsum lorem ipsum</p>

             
              <Container>
                <Row>
                  <Col md="4">
                  <Alert color="danger">
                 This is red alert Component.
              </Alert>
                  </Col>
                  <Col md="4">
                  <Alert color="danger">
                 This is red alert Component.
              </Alert>
                  </Col>
                  <Col md="4">
                  <Alert color="danger">
                 This is red alert Component.
              </Alert>
                  </Col>
                  
                </Row>
              </Container>
        </>

    )
  }
}

export default MyApp;