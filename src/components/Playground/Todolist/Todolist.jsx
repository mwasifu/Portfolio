import React, { useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import TaskForm from './TaskForm';
import List from "./List";

const Todolist = () => {
  const [inputText, setInputText] = useState("");
  const [todo, setTodo] = useState([]);

  return (
    <div>
      <TaskForm inputText={inputText} setInputText={setInputText} todo={todo} setTodo={setTodo}/>
    </div>
  );
};

export default Todolist;
