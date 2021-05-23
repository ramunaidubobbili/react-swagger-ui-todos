import React from "react";
import {
  Card,
  CardTitle,
  Modal,
  ModalBody,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  FormFeedback
} from "reactstrap";
import PropTypes from "prop-types";

class EditTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: this.props.todo?.name,
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

  editTask = (todo, name) => {
    if (name !== "" && !this.state.error) {
      this.props.updateTask(todo, name);
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
    const { todo } = this.props;
    return (
      <Modal
        isOpen={this.props.isEditModal}
        size="sm"
        toggle={this.props.editToggle}
        centered={true}
      >
        <ModalBody
          className="shadow-sm p-4 bg-body border-0"
          style={styles.rounded7}
        >
          <Card className="border-0">
            <CardTitle tag="h5" className="mb-4">
              Update Task
            </CardTitle>
            <Form inline>
              <FormGroup className="mb-3 mr-sm-2">
                <Label for="taskname" className="visually-hidden">
                  Task Name
                </Label>
                <Input
                  type="text"
                  name="taskname"
                  id="taskname"
                  placeholder="Task Name"
                  className="py-2 px-3"
                  style={styles.formControl}
                  defaultValue={this.state.name}
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
                  onClick={() => this.editTask(todo, this.state.name)}
                >
                  Update Task
                </Button>
              </div>
            </Form>
          </Card>
        </ModalBody>
      </Modal>
    );
  }
}

EditTask.propTypes = {
  todo: PropTypes.object.isRequired,
  isEditModal: PropTypes.bool.isRequired,
  editToggle: PropTypes.func,
  updateTask: PropTypes.func
};

export default EditTask;
