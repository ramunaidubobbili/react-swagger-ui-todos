import React from "react";
import {
  Container,
  Row,
  Col,
  Card,
  ListGroup,
  ListGroupItem
} from "reactstrap";
import Skeleton from "react-loading-skeleton";

class SkeltonComp extends React.Component {
  render() {
    const styles = {
      minHeight: {
        minHeight: "708px"
      }
    };
    return (
      <Container>
        <Row
          className="pt-5 mt-5 justify-content-center"
          style={styles.minHeight}
        >
          <Col md="12">
            <Row>
              <Col sm="12" md="4" className="mb-3 mb-sm-0">
                <Card
                  className="shadow-sm bg-light h-100 p-4 bg-body border-0"
                  style={styles.rounded7}
                >
                  <Skeleton height={25} className="mb-3" />
                  <Skeleton count={2} />
                  <Skeleton className="w-50" />
                </Card>
              </Col>
              <Col sm="12" md="4" className="mb-3 mb-sm-0">
                <Card
                  className="shadow-sm bg-light h-100 p-4 bg-body border-0"
                  style={styles.rounded7}
                >
                  <Skeleton height={25} className="mb-3" />
                  <Skeleton count={2} />
                  <Skeleton className="w-50" />
                </Card>
              </Col>
              <Col sm="12" md="4" className="mb-3 mb-sm-0">
                <Card
                  className="shadow-sm bg-light h-100 p-4 bg-body text-center border-0"
                  style={styles.rounded7}
                >
                  <Skeleton circle={true} height={100} width={100} />
                </Card>
              </Col>
            </Row>
            <Row className="align-items-center mt-4 mb-2 justify-content-between">
              <Col md="4">
                <Skeleton height={25} />
              </Col>
              <Col md="4">
                <Row>
                  <Col md="8">
                    <Skeleton height={30} />
                  </Col>
                  <Col>
                    <Skeleton height={30} />
                  </Col>
                </Row>
              </Col>
            </Row>
            <Row>
              <Col md="12" className="pb-5">
                <div
                  className="shadow-sm px-4 h-100 bg-body border-0"
                  style={styles.rounded7}
                >
                  <ListGroup flush className="fs-5">
                    <ListGroupItem className="px-0 py-3">
                      <Row className="justify-content-between">
                        <Col xs="8">
                          <Skeleton height={15} />
                          <Skeleton height={15} className="w-50" />
                        </Col>
                        <Col
                          xs="2"
                          className="text-end d-flex justify-content-end"
                        >
                          <Skeleton
                            circle={true}
                            width={30}
                            height={30}
                            className="me-2"
                          />

                          <Skeleton circle={true} width={30} height={30} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem className="px-0 py-3">
                      <Row className="justify-content-between">
                        <Col xs="8">
                          <Skeleton height={15} />
                          <Skeleton height={15} className="w-50" />
                        </Col>
                        <Col
                          xs="2"
                          className="text-end d-flex justify-content-end"
                        >
                          <Skeleton
                            circle={true}
                            width={30}
                            height={30}
                            className="me-2"
                          />

                          <Skeleton circle={true} width={30} height={30} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem className="px-0 py-3">
                      <Row className="justify-content-between">
                        <Col xs="8">
                          <Skeleton height={15} />
                          <Skeleton height={15} className="w-50" />
                        </Col>
                        <Col
                          xs="2"
                          className="text-end d-flex justify-content-end"
                        >
                          <Skeleton
                            circle={true}
                            width={30}
                            height={30}
                            className="me-2"
                          />

                          <Skeleton circle={true} width={30} height={30} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                    <ListGroupItem className="px-0 py-3">
                      <Row className="justify-content-between">
                        <Col xs="8">
                          <Skeleton height={15} />
                          <Skeleton height={15} className="w-50" />
                        </Col>
                        <Col
                          xs="2"
                          className="text-end d-flex justify-content-end"
                        >
                          <Skeleton
                            circle={true}
                            width={30}
                            height={30}
                            className="me-2"
                          />

                          <Skeleton circle={true} width={30} height={30} />
                        </Col>
                      </Row>
                    </ListGroupItem>
                  </ListGroup>
                </div>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
export default SkeltonComp;
