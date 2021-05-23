import React from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

const styles = {
  bgColor: {
    backgroundColor: "#FFFFFF"
  },
  profileImg: {
    color: "#537178"
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userDetails: {}
    };
  }

  componentDidMount() {
    let userDetails = JSON.parse(localStorage.getItem("userDetails"));
    //let userDetails = localStorage.removeItem("userDetails");
    this.setState({
      userDetails: userDetails
    });
  }

  render() {
    return (
      <Navbar
        light
        expand="md"
        fixed="top"
        className="shadow mb-5 bg-body"
        style={styles.bgColor}
      >
        <Container>
          <NavbarBrand
            className="d-flex justify-content-center align-items-center"
            style={styles.profileImg}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="40"
              fill="currentColor"
              className="bi bi-person-circle"
              viewBox="0 0 16 16"
            >
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path
                fillRule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"
              />
            </svg>
            <span className="ms-2 text-capitalize">
              {this.state.userDetails && this.state.userDetails.name}
            </span>
          </NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink
                role="button"
                onClick={() => this.props.callbackSignout()}
                className="fw-bolder"
              >
                Logout
              </NavLink>
            </NavItem>
          </Nav>
        </Container>
      </Navbar>
    );
  }
}
export default Header;
