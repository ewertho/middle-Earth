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
//style="width: 20rem;"
// core components
import IndexHeader from "../../components/Headers/IndexHeader"


function ProfilePage() {


  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("landing-page");
    return function cleanup() {
      document.body.classList.remove("landing-page");
    }
  })
  return (
    <>
      <IndexHeader />

      <div className="section profile-content">
        <Container>
          <Row>
            <Col className="ml-auto mr-auto text-center" md="6">
              <br />
              <Button className="btn-round" color="default" href="/access/profile-page" outline>
                Cadastrar novas imagens
              </Button>

              <Button className="btn-round" color="default" href="/access/profile-page"outline>
                lading
              </Button>
            </Col>
          </Row>
          <br />
          <Row>
            <Col lg="3" md="4" xs="4">
            <div className="card" >
              <img className="card-img-top" src={require("../../assets/img/uriel-soberanes.jpg")} alt="Card cap"></img>
              <div className="img-details">
                <div className="author">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("../../assets/img/avatar.jpg")}
                  />
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
                <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              </div>
            </div>
            </Col>
          
            <Col lg="3" md="4" xs="4">
            <div className="card" >
              <img className="card-img-top" src={require("../../assets/img/uriel-soberanes.jpg")} alt="Card cap"></img>
              <div className="img-details">
                <div className="author">
                  <img
                    alt="..."
                    className="img-circle img-no-padding img-responsive"
                    src={require("../../assets/img/avatar.jpg")}
                  />
                </div>
              </div>
              <div className="card-body">
                <h4 className="card-title">Card title</h4>
                <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
                <a href="/" className="btn btn-primary">Go somewhere</a>
                <FormGroup check>
                <Label check>
                  <Input defaultValue="" type="checkbox" />
                  <span className="form-check-sign" />
                </Label>
              </FormGroup>
              </div>
            </div>
            </Col>
          </Row>
        </Container>
      </div>

    </>
  )
}

export default ProfilePage
