import React from "react";
import { Button, FormCheck, Stack } from "react-bootstrap";

const Todo = ({ text, todo, setTodo, todoItem }) => {
    const deleteHandler = (e) => {
        console.log(e.target);
        setTodo(todo.filter((element) => element.id !== todoItem.id));
    };
  return (
    <div>
      <Stack gap={3} direction="horizontal" style={{margin: "6%", overflowWrap: "break-word", wordWrap: "break-word"}}>
        <h5 className="me-auto" style={{fontWeight: "300"}}>{text}</h5>
        <div className="vr" />
        <FormCheck />
        <div className="vr" />
        <Button variant="danger" onClick={deleteHandler}>Delete</Button>
      </Stack>
    </div>
  );
};

export default Todo;
