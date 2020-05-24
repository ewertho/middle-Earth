import React, {useState} from "react"
// reactstrap components
import { Button, Card, Form, Input, Container, Row, Col } from "reactstrap"
// core components

import Index from './index'

function onSend(pass, mail) {
  console.log(this.state.texto)
  console.log(this.state.texto)
}

function Style(){
  const [pass, setPass] = useState('')
  const [mail, setMail] = useState('')
  onSend(pass, mail)

  return(
  <>


      <div className="filter" />
      <Container >
      <div className="page-header"
      style={{backgroundImage: "url(" + require("../../assets/img/ring.png") + ")"}}
      ></div>
        <Row >
          <Col className="ml-auto mr-auto" lg="4" >
            <Card className="card-body bg-dark ml-auto mr-auto">
              <h5 className="title mx-auto">Fazer Login</h5>

              <Form className="register-form">
                <label>Email</label>
                <Input placeholder="Email" type="text" onInput={(e) => setMail( e.target.value)}/>
                <label>Password</label>
                <Input placeholder="Password" type="password" onInput={(e) => setPass( e.target.value)}/>
                <br/>
                <Button onClick={Index.search(pass, mail)} block className="btn-round" color="danger">
                  Register
                </Button>
              </Form>
              <div className="forgot">
                <Button className="btn-link" color="danger" href="#pablo"
                    >
                  Forgot password?
                </Button>
              </div>
            </Card>
          </Col>
        </Row>
      </Container>

  </>
  )
  }

  export default Style
