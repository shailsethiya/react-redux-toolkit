import React, { useState } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";

import {
  useAddUserMutation,
  useDeleteUserMutation,
  useGetUserQuery,
} from "../../store/api/user";

function UserList({ user, onDelete }) {
  return (
    <div className="p-2 d-flex justify-content-between align-items-center border border-secondary rounded mb-2">
      <p>{user.userName}</p>
      <p>{user.email}</p>
      <Button variant="danger" onClick={() => onDelete(user._id)}>
        x
      </Button>
    </div>
  );
}

function UserPage() {
  const [value, setValue] = useState({ email: "", userName: "" });
  const { data, isLoading } = useGetUserQuery();
  const [addUser] = useAddUserMutation();
  const [deleteUser] = useDeleteUserMutation();
  const onAdd = () => {
    if (value) {
      addUser(value);
      setValue({ email: "", userName: "" });
    }
  };
  const onDelete = (id) => {
    deleteUser(id);
  };
  const onChange = (e) => {
    setValue({
      ...value,
      [e.target.name]: e.target.value,
    });
  };
  return (
    <Card className="p-4">
      <div className="display-flex">
        <h3 className="mb-4">User</h3>
        <Row>
          <Col>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicTask">
                <Form.Label>Add User Name</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter user name"
                  value={value.userName}
                  name="userName"
                  onChange={onChange}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicTask">
                <Form.Label>Add User Email</Form.Label>
                <Form.Control
                  name="email"
                  type="text"
                  placeholder="Enter user email"
                  value={value.email}
                  onChange={onChange}
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
            {isLoading ? (
              <div className="p-2 d-flex justify-content-between align-items-center border border-secondary rounded mb-2">
                Loading...
              </div>
            ) : (
              data?.data?.map((user, key) => (
                <UserList
                  user={user}
                  key={key}
                  index={key}
                  onDelete={onDelete}
                />
              ))
            )}
          </Col>
        </Row>
      </div>
    </Card>
  );
}

export default UserPage;
