import React from 'react';
import {Container, Row, Col, Card, CardTitle, CardBody} from 'reactstrap'
import DynamicTable from "./components/DynamicTable/DynamicTable";
import studentMock from "./MockData/student.mock";
import PostMock from "./MockData/post.mock";

function App() {
    return (
        <div className="p-5">
            <Container>
                <Row>
                    <Col>
                        <Card>
                            <CardTitle>
                                <h1 className="text-center">Dynamic Table With Typescript</h1>
                            </CardTitle>
                            <CardBody>
                                <DynamicTable data={studentMock}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Card>
                            <CardTitle>
                                <h1 className="text-center">Dynamic Table With Typescript</h1>
                            </CardTitle>
                            <CardBody>
                                <DynamicTable data={PostMock}/>
                            </CardBody>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default App;
