import React from "react";
import { Card, CardTitle, Row, Col, Container } from "reactstrap";

const styles = {
  rounded7: {
    borderRadius: ".7rem"
  }
};

class PageNotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Container>
        <Row className="vh-100 justify-content-center align-items-center pt-5">
          <Col sm="6" md="5">
            <Card
              body
              className="shadow-sm p-5 mb-5 bg-body border-0 text-center"
              style={styles.rounded7}
            >
              <CardTitle tag="h2" className="mb-0">
                Oops!.. Page not found
              </CardTitle>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default PageNotFound;
