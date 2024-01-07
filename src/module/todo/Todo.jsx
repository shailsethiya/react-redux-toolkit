import React, { useEffect, useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";

import { useGetUserQuery } from "../../store/api/user";
import { addTodo, deleteTodo } from "../../store/slice/todo.slice";

function TodoTask({ todo, onDelete, index }) {
  return (
    <div className="p-2 d-flex justify-content-between align-items-center border border-secondary rounded mb-2">
      <p>{todo}</p>
      <Button variant="danger" onClick={() => onDelete(index)}>
        x
      </Button>
    </div>
  );
}

function TodoPage() {
  const dispatch = useDispatch();
  const { refetch } = useGetUserQuery();
  useEffect(() => {
    refetch();
  }, []);
  const [value, setValue] = useState("");
  const todos = useSelector((state) => state.todos);
  const onAdd = () => {
    if (value) {
      dispatch(addTodo(value));
      setValue("");
    }
  };
  const onDelete = (index) => {
    dispatch(deleteTodo(index));
  };
  return (
    <Card className="p-4">
      <div className="display-flex">
        <h3 className="mb-4">TODO</h3>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTask">
                <Form.Label>Add Task</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter task"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
                />
              </Form.Group>
              <Button variant="primary" type="button" onClick={onAdd}>
                Add
              </Button>
            </Form>
          </Col>
        </Row>
        <hr />
        <Row className="mt-3">
          <Col>
            {todos.map((todo, key) => (
              <TodoTask todo={todo} key={key} index={key} onDelete={onDelete} />
            ))}
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default TodoPage;
