import React from "react"
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap"
// core components
import IndexNavbar from "../../components/Navbars/IndexNavbar"


function RegisterPage() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("register-page");
    return function cleanup() {
      document.body.classList.remove("register-page");
    }
  })
  return (
    <>
      <IndexNavbar />
      <div
        className="page-header"
        style={{
          backgroundImage: "url(" + require("../../assets/img/ring.png") + ")"
        }}
      >
        <div className="filter" />
        <Container >
          <Row >
            <Col className="ml-auto mr-auto" lg="4" >
              <Card className="card-body bg-dark ml-auto mr-auto">
                <h5 className="title mx-auto">Welcome</h5>
                
                <Form className="register-form">
                  <label>Email</label>
                  <Input placeholder="Email" type="text" />
                  <label>Password</label>
                  <Input placeholder="Password" type="password" />
                  <br/>
                  <Button  block className="btn-round" color="danger">
                    Register
                    
                  </Button>
                </Form>
                <div className="forgot">
                  <Button
                    className="btn-link"
                    color="danger"
                    href="#pablo"
                    onClick={e => e.preventDefault()}
                  >
                    Forgot password?
                  </Button>
                </div>
              </Card>
            </Col>
          </Row>
        </Container>
        
      </div>
    </>
  )
}

export default RegisterPage