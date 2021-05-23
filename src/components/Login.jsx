import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  Row,
  Col,
  Container
} from "reactstrap";
import { Redirect } from "react-router-dom";
import axios from "axios";

const styles = {
  rounded7: {
    borderRadius: ".7rem"
  },
  formControl: {
    background: "#eef1f8",
    borderColor: "#eef1f8",
    borderRadius: ".5rem"
  },
  rounded5: {
    borderRadius: ".5rem"
  }
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isLogged: false,
      id: "",
      name: "",
      userDetails: {}
    };
  }

  onChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    });
    //console.log(event.target.name + ":" + event.target.value);
  };

  login = (event) => {
    //let userId = this.state.id;
    let userName = this.state.name;
    let apiKey = "fb026085864fae18";

    let request = {
      method: "post",
      url: "https://dev-dl.tdcx.com:3092/login",
      data: { name: userName, apiKey: apiKey },
      headers: {
        accept: "application/json"
      }
    };
    axios(request).then(
      (res) => {
        //console.log(res);
        if (res.statusText === "OK") {
          let userData = {};
          userData.name = res.data.token.name;
          userData.token = res.data.token.token;
          userData.msg = res.data.msg;
          userData.image = res.data.image;
          localStorage.setItem("userDetails", JSON.stringify(userData));
          localStorage.setItem("token", res.data.token.token);
          this.setState({
            //userDetails: userData,
            isLogged: !this.state.isLogged
          });
        }
      },
      (error) => {
        console.log(error);
      }
    );
    event.preventDefault();
  };

  render() {
    let token = localStorage.getItem("token");
    if (token) {
      return <Redirect to="/" />;
    }
    return (
      <Container>
        <Row className="vh-100 justify-content-center align-items-center">
          <Col sm="6" md="3">
            <Card
              body
              className="shadow-sm p-4 mb-5 bg-body border-0"
              style={styles.rounded7}
            >
              <CardTitle tag="h5" className="mb-4">
                Login
              </CardTitle>
              <Form inline noValidate autoComplete="off">
                <FormGroup className="mb-3 mr-sm-2">
                  <Label for="id" className="visually-hidden">
                    Id
                  </Label>
                  <Input
                    type="text"
                    name="id"
                    id="id"
                    placeholder="Id"
                    className="py-2 px-3"
                    style={styles.formControl}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <FormGroup className="mb-3 mr-sm-2">
                  <Label for="name" className="visually-hidden">
                    Name
                  </Label>
                  <Input
                    type="text"
                    name="name"
                    id="name"
                    placeholder="Name"
                    className="py-2 px-3"
                    style={styles.formControl}
                    onChange={(e) => this.onChange(e)}
                  />
                </FormGroup>
                <div className="d-grid gap-2">
                  <Button
                    color="primary"
                    className="py-2 px-3"
                    style={styles.rounded5}
                    onClick={this.login}
                  >
                    Login
                  </Button>
                </div>
              </Form>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Login;
