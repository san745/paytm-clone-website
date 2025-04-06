import React from 'react';
import { Container, Row, Col,Image } from 'react-bootstrap';
const Home = () => {
  return (
    <div className="bg-light text-center py-5">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <h1 className="display-4">Fast & Secure Online Payments</h1>
            <p className="lead">
              Experience seamless transactions with PayEase. Whether you're a small business or an enterprise, our platform offers the tools you need to manage payments effortlessly.
            </p>
            <ul className="list-unstyled">
            <li>
                <span role="img" aria-label="check">✔️</span> Easy integration with your website or app
              </li>
              <li>
                <span role="img" aria-label="check">✔️</span> Accept payments globally in multiple currencies
              </li>
              <li>
                <span role="img" aria-label="check">✔️</span> Real-time transaction monitoring and analytics
              </li>
            </ul>

          </Col>
          <Col md={6}>
            <Image src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8b25saW5lJTIwcGF5bWVudHxlbnwwfHwwfHx8MA%3D%3D" alt="Online payment illustration" fluid />
          </Col>
        </Row>
      </Container>
    </div>
  );
  };
  
  export default Home;
  