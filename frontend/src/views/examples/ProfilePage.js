import React from "react"


// reactstrap components
import {
  Button,
  Label,
  FormGroup,
  Input,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import IndexNavbar from "components/Navbars/IndexNavbar.js"
import ProfilePageHeader from "components/Headers/ProfilePageHeader.js"

function ProfilePage() {
  window.sessionStorage.setItem("secret", "myprecios")
  function transferir(){
    
    var secret = sessionStorage.getItem("secret")
    var login
    secret ? login ="/register-page" : login="/user-area"
    console.log(login)
    console.log(secret)
    return login
  }

  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    }
  })
  return (
    <>
      <IndexNavbar />
      <ProfilePageHeader />
      <div className="section profile-content">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <br />
              <Button className="btn-round" color="default" outline>
                <i className="fa fa-cog" href={()=>transferir()}
                /> Cadastrar novas imagens
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/uriel-soberanes.jpg")}
              />
              <div className="img-details">
                <div className="author">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/joe-gardner-2.jpg")}
                  />
                </div>
                <p>Sonia Green</p>
              </div>
            </Col>
            <Col lg="3" md="4" xs="4">
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
          </Row>

          <Row>
            <Col md="3" sm="6">
              <img
                alt="..."
                className="img-rounded img-responsive"
                src={require("assets/img/uriel-soberanes.jpg")}
              />
              <div className="img-details">
                <div className="author">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("assets/img/faces/joe-gardner-2.jpg")}
                  />
                </div>
                <p>Sonia Green</p>
              </div>
            </Col>
            <Col lg="3" md="4" xs="4">
              <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
            </Col>
          </Row> 
        </Container>
      </div>
    
    </>
  )
}

export default ProfilePage
