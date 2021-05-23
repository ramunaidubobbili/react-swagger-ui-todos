import React from "react";
import {
  Button,
  FormGroup,
  Label,
  Input,
  Row,
  Col,
  Container,
  Alert
} from "reactstrap";

import SkeltonComp from "../skelton/Skelton";

import axios from "axios";
import CompletedTasks from "./CompletedTasks";
import LatestTasks from "./LatestTasks";
import Chart from "./Chart";
import TodosList from "./TodosList";
import EditTask from "./EditTask";
import NewTask from "./NewTask";
import NoData from "./NoData";

const styles = {
  searchControl: {
    background: "#d9dfeb",
    borderColor: "#d9dfeb",
    borderRadius: ".5rem"
  },
  rounded5: {
    borderRadius: ".5rem"
  },
  minHeight: {
    minHeight: "708px"
  }
};

class IndexDashboard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditModal: false,
      isNewTaskModal: false,
      todos: [],
      filteredData: [],
      token: localStorage.getItem("token"),
      isSkelton: false,
      messageObj: { type: "", message: "" }
    };
  }

  componentDidMount() {
    let request = {
      method: "GET",
      url: "https://dev-dl.tdcx.com:3092/tasks",
      headers: {
        accept: "application/json",
        authorization: this.state.token
      }
    };
    this.setState({
      isSkelton: true
    });
    setTimeout(() => {
      axios(request).then(
        (res) => {
          this.setState({
            todos: res.data.tasks,
            filteredData: res.data.tasks,
            isSkelton: false
          });
          console.log(res.data.tasks);
        },
        (error) => {
          console.log(error);
        }
      );
    }, 2000);
  }

  addNewTask = (name) => {
    debugger;
    let request = {
      method: "post",
      url: "https://dev-dl.tdcx.com:3092/tasks",
      data: { name: name, completed: false },
      headers: {
        accept: "application/json",
        authorization: this.state.token
      }
    };
    this.setState({
      isSkelton: true
    });
    setTimeout(() => {
      axios(request).then(
        (res) => {
          console.log(res.data);
          this.setState({
            todos: [...this.state.todos, res.data.task],
            filteredData: [...this.state.todos, res.data.task],
            isSkelton: false,
            messageObj: { type: "success", message: res.data.msg }
          });
          this.newTaskToggle();
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1000);
  };

  markComplete = (id, name, completed) => {
    this.setState({
      isSkelton: true
    });
    setTimeout(() => {
      axios({
        method: "PUT",
        url: `https://dev-dl.tdcx.com:3092/tasks/${id}`,
        headers: {
          accept: "application/json",
          authorization: this.state.token
        },
        data: { _id: id, name: name, completed: completed }
      }).then(
        (res) => {
          console.log(res.data.task);
          this.setState({
            todos: this.state.todos.map((todo) => {
              if (todo._id === res.data.task._id) {
                todo.completed = res.data.task.completed;
              }
              return todo;
            }),
            isSkelton: false,
            messageObj: { type: "success", message: res.data.msg }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }, 500);
  };

  updateTask = (todo, name) => {
    this.setState({
      isSkelton: true
    });
    setTimeout(() => {
      axios({
        method: "PUT",
        url: `https://dev-dl.tdcx.com:3092/tasks/${todo._id}`,
        headers: {
          accept: "application/json",
          authorization: this.state.token
        },
        data: { _id: todo._id, name: name, completed: todo.completed }
      }).then(
        (res) => {
          console.log(res.data.task);
          this.setState({
            todos: this.state.todos.map((todo) => {
              if (todo._id === res.data.task._id) {
                todo.name = res.data.task.name;
              }
              return todo;
            }),
            isSkelton: false,
            messageObj: { type: "success", message: res.data.msg }
          });
          this.editToggle();
        },
        (error) => {
          console.log(error);
        }
      );
    }, 1000);
  };

  deleteTask = (id) => {
    this.setState({
      isSkelton: true
    });
    setTimeout(() => {
      axios({
        method: "delete",
        url: `https://dev-dl.tdcx.com:3092/tasks/${id}`,
        headers: {
          accept: "application/json",
          authorization: this.state.token
        }
      }).then(
        (res) => {
          console.log(res.data.task);
          this.setState({
            todos: [...this.state.todos.filter((todo) => todo._id !== id)],
            filteredData: [
              ...this.state.todos.filter((todo) => todo._id !== id)
            ],
            isSkelton: false,
            messageObj: { type: "success", message: res.data.msg }
          });
        },
        (error) => {
          console.log(error);
        }
      );
    }, 500);
  };

  newTaskToggle = () => {
    this.setState({
      isNewTaskModal: !this.state.isNewTaskModal
    });
  };

  editToggle = () => {
    this.setState({
      isEditModal: !this.state.isEditModal
    });
  };

  toggleEditModal = (id) => {
    this.setState({
      editTaskId: id,
      isEditModal: true
    });
    this.editToggle();
  };

  _handleSearchChange = (e) => {
    const { value } = e.target;
    const lowercasedValue = value.toLowerCase();
    this.setState((prevState) => {
      const filteredData = prevState.todos.filter((el) =>
        el.name.toLowerCase().includes(lowercasedValue)
      );
      return { filteredData };
    });
  };
  closeAlert = () => {
    setTimeout(() => {
      this.setState({
        messageObj: { type: "", message: "" }
      });
    }, 8000);
  };

  alert = (messageObj) => {
    return (
      <Alert
        color={messageObj.type}
        className={"notification-alert position-fixed "}
        isOpen={messageObj.type !== "" ? true : false}
        toggle={this.closeAlert()}
      >
        {messageObj.message}
      </Alert>
    );
  };

  render() {
    const { todos, filteredData, messageObj } = this.state;
    const completedTasks = todos.filter((todo, i) => todo.completed === true);
    const value = (completedTasks.length * 100) / todos.length;
    const chartData = [
      { name: "Completed Tasks", value: value },
      { name: "", value: 100 - value }
    ];
    const editTodo = todos.filter((todo) => todo._id === this.state.editTaskId);
    if (!this.state.isSkelton) {
      return (
        <Container>
          {todos?.length !== 0 ? (
            <Row
              className="pt-5 mt-5 justify-content-center"
              style={styles.minHeight}
            >
              <Col md="12">
                {this.alert(messageObj)}
                <Row>
                  <CompletedTasks
                    todosLength={todos.length}
                    completedTasks={completedTasks.length}
                  />
                  <LatestTasks todos={todos} />
                  <Chart data={chartData} />
                </Row>
                <Row className="align-items-center mt-4 mb-2">
                  <Col md="4">
                    <h5 className="mb-sm-0">Tasks</h5>
                  </Col>
                  <Col md="8">
                    <div className="d-flex flex-column flex-sm-row justify-content-end">
                      <FormGroup className="mb-3 mb-sm-0 me-sm-3">
                        <Label for="search" className="visually-hidden">
                          Search
                        </Label>
                        <Input
                          type="text"
                          name="search"
                          id="search"
                          placeholder="Search by task name"
                          className="py-2 px-3"
                          style={styles.searchControl}
                          onChange={this._handleSearchChange}
                        />
                      </FormGroup>

                      <Button
                        color="primary"
                        className="py-2 px-3"
                        style={styles.rounded5}
                        onClick={this.newTaskToggle}
                      >
                        + New Task
                      </Button>
                    </div>
                  </Col>
                </Row>
                <TodosList
                  todos={filteredData}
                  deleteTask={this.deleteTask}
                  markComplete={this.markComplete}
                  toggleEditModal={this.toggleEditModal}
                />
              </Col>
            </Row>
          ) : (
            <NoData newTaskToggle={this.newTaskToggle} />
          )}
          {this.state.isEditModal && (
            <EditTask
              isEditModal={this.state.isEditModal}
              editToggle={this.editToggle}
              todo={editTodo[0]}
              updateTask={this.updateTask}
            />
          )}
          {this.state.isNewTaskModal && (
            <NewTask
              isNewTaskModal={this.state.isNewTaskModal}
              newTaskToggle={this.newTaskToggle}
              addNewTask={this.addNewTask}
            />
          )}
        </Container>
      );
    } else {
      return <SkeltonComp />;
    }
  }
}
export default IndexDashboard;
