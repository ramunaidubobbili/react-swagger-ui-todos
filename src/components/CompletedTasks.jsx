import React from "react";
import { Card, CardTitle, CardBody, Col } from "reactstrap";

class CompletedTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      rounded7: {
        borderRadius: ".7rem"
      }
    };

    return (
      <Col sm="12" md="4" className="mb-3 mb-sm-0">
        <Card
          className="shadow-sm h-100 p-4 bg-body border-0"
          style={styles.rounded7}
        >
          <CardTitle tag="h5">Tasks Completed</CardTitle>
          <CardBody className="fs-4 fw-normal p-0">
            <span className="display-2 fw-normal text-primary">
              {this.props.completedTasks}
            </span>
            / {this.props.todosLength}
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default CompletedTasks;
