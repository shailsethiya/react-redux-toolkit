import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router-dom";

import Header from "./Header";

function Layout() {
  return (
    <>
      <Header />
      <main>
        <Container fluid className="mt-5">
          <Row className="justify-content-center">
            <Col md={9} lg={9}>
              <Outlet />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  );
}

export default Layout;
