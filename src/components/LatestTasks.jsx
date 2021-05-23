import React from "react";
import { Card, CardTitle, CardBody, Col, List } from "reactstrap";

class LatestTasks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    const styles = {
      rounded7: {
        borderRadius: ".7rem"
      },
      padingLeft: {
        paddingLeft: "1.2rem"
      }
    };
    return (
      <Col sm="12" md="4" className="mb-3 mb-sm-0">
        <Card
          className="shadow-sm h-100 p-4 bg-body border-0"
          style={styles.rounded7}
        >
          <CardTitle tag="h5">Latest Created Tasks</CardTitle>
          <CardBody className="p-0">
            <List style={styles.padingLeft} className="mb-0">
              {this.props.todos &&
                this.props.todos.map((todo, i) => {
                  if (3 >= this.props.todos.length - i) {
                    return (
                      <li
                        key={todo._id}
                        className={
                          todo.completed ? "text-decoration-line-through" : ""
                        }
                      >
                        {todo.name}
                      </li>
                    );
                  }
                })}
            </List>
          </CardBody>
        </Card>
      </Col>
    );
  }
}
export default LatestTasks;
