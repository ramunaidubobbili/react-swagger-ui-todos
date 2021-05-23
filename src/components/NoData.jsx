import React from "react";
import { Button, Form, Card, CardTitle, Row, Col } from "reactstrap";

const styles = {
  rounded7: {
    borderRadius: ".7rem"
  }
};

class NoData extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  render() {
    return (
      <Row className="vh-100 justify-content-center align-items-center pt-5">
        <Col sm="6" md="3">
          <Card
            body
            className="shadow-sm p-5 mb-5 bg-body border-0 text-center"
            style={styles.rounded7}
          >
            <CardTitle tag="h5" className="mb-4">
              You have no tasks
            </CardTitle>
            <Form>
              <Button
                color="primary"
                className="rounded-5 py-2 px-3"
                onClick={this.props.newTaskToggle.bind(this)}
              >
                + New Task
              </Button>
            </Form>
          </Card>
        </Col>
      </Row>
    );
  }
}

export default NoData;
