import React from "react";
import {Form, Button, Row, Col} from 'react-bootstrap';
import List from "./List";

const TaskForm = ({inputText, setInputText, todo={todo}, setTodo={setTodo}}) => {
  const inputHandler = (e) => {
    console.log(e.target.value);
    setInputText(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(e.target);
    if (inputText === ''){
      console.log("empty");
      return;
    }
    setTodo([
      ...todo,
      {
        text: inputText,
        id: Math.random() * 100
      }
    ]);
    setInputText('');
  };
  return (
    
    <div>
      <Form style={{paddingBottom: "5%", paddingTop: "5%"}}>
        <Form.Label style={{ fontSize: "2rem", fontWeight: "300" }}>
          Task Master
        </Form.Label>
        <Row style={{ padding: "5%" }}>
          <Col xs={9}>
            <Form.Control
              type="text"
              placeholder="Add Task"
              onChange={inputHandler}
              value={inputText}
            />
          </Col>
          <Col>
            <Button
              variant="dark"
              value="Add"
              type="Submit"
              onClick={submitHandler}
            >
              Add
            </Button>
          </Col>
        </Row>
        <Row>
          <List todo={todo} setTodo={setTodo}/>
        </Row>
        <br />
        <Row>
          <h6 style={{fontWeight: "300"}}>Planning your day just got a lot simpler</h6>
        </Row>
      </Form>
    </div>
  );
};

export default TaskForm;
