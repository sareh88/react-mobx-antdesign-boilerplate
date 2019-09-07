import React from "react";
import { Row, Col } from "antd";

import "./stylesheets/App.scss";

const App = () => {
  return (
    <Row type="flex" justify="center" align="middle" className="app-container">
      <Col span={24} className="card-container">
        Go
      </Col>
    </Row>
  );
};

export default App;
