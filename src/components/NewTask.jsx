import React from "react";
import {
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Card,
  CardTitle,
  Modal,
  ModalBody,
  FormFeedback
} from "reactstrap";

class NewTask extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      error: false
    };
  }

  onChange = (e) => {
    let error = e.target.value === "";
    this.setState({
      name: e.target.value,
      error: error
    });
  };

  onBlur = (e) => {
    let error = e.target.value === "";
    this.setState({
      name: e.target.value,
      error: error
    });
  };

  addTask = (name) => {
    if (name !== "" && !this.state.error) {
      this.props.addNewTask(name);
      this.setState({
        name: "",
        error: false
      });
    } else {
      this.setState({
        error: true
      });
    }
  };

  render() {
    const styles = {
      rounded7: {
        borderRadius: ".7rem"
      },
      formControl: {
        background: "#eef1f8",
        borderColor: this.state.error ? "#dc3545" : "#eef1f8",
        borderRadius: ".5rem"
      },
      rounded5: {
        borderRadius: ".5rem"
      }
    };
    return (
      <Modal
        isOpen={this.props.isNewTaskModal}
        size="sm"
        toggle={this.props.newTaskToggle}
        centered={true}
      >
        <ModalBody
          className="shadow-sm p-4 bg-body border-0"
          style={styles.rounded7}
        >
          <Card className="border-0">
            <CardTitle tag="h5" className="mb-4">
              + New Task
            </CardTitle>
            <Form inline>
              <FormGroup className="mb-3 mr-sm-2">
                <Label for="name" className="visually-hidden">
                  Task Name
                </Label>
                <Input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Task Name"
                  className={"py-2 px-3 "}
                  style={styles.formControl}
                  onChange={this.onChange}
                  onBlur={this.onBlur}
                  invalid={this.state.error ? true : false}
                />
                <FormFeedback>Enter task name</FormFeedback>
              </FormGroup>
              <div className="d-grid gap-2">
                <Button
                  color="primary"
                  className="py-2 px-3"
                  style={styles.rounded5}
                  onClick={() => this.addTask(this.state.name)}
                >
                  + New Task
                </Button>
              </div>
            </Form>
          </Card>
        </ModalBody>
      </Modal>
    );
  }
}

export default NewTask;
