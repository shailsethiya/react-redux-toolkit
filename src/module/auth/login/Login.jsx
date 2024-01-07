import React, { useContext, useEffect, useState } from "react";
import { Button, Card, Form, Spinner } from "react-bootstrap";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";

import { ThemeContext } from "../../../context/Theme.context";
import { PATHS } from "../../../routes/config";
import { authSelector, clearAuthMessage, login } from "../../../store/api/auth";

function Login() {
  // const [signIn, { isLoading, data, error }] = useSigninMutation({
  //   fixedCacheKey: "signin",
  // });
  const dispatch = useDispatch();
  const { isFetching, isError, errorMessage, token } = useSelector(
    authSelector,
    shallowEqual
  );
  const { theme } = useContext(ThemeContext);
  const [value, setValue] = useState({
    email: "test@admin.com",
    password: "test@2022",
  });
  const onChange = (e) => {
    setValue({ ...value, [e.target.name]: e.target.value });
  };
  useEffect(() => {
    if (isError && errorMessage) {
      toast(errorMessage, {
        autoClose: 5000,
        pauseOnHover: false,
        type: "error",
        theme: theme,
      });
      dispatch(clearAuthMessage());
    }
  }, [isError]);
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(login(value));
  };
  if (token) {
    return <Navigate to={PATHS.DASHBOARD} />;
  }
  return (
    <Card className="p-4">
      <div className="display-flex">
        <h3 className="mb-4">Sign In</h3>
      </div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            name="email"
            onChange={onChange}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Enter password"
            name="password"
            onChange={onChange}
          />
        </Form.Group>
        <div className="d-flex justify-content-between align-items-center">
          <Button variant="primary" type="submit">
            Submit
            {isFetching && (
              <Spinner
                size="sm"
                animation="border"
                as="span"
                role="status"
                className="mx-2"
              />
            )}
          </Button>
          <p>Forgot Password?</p>
        </div>
      </Form>
    </Card>
  );
}

export default Login;
