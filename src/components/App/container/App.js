import React from "react";
import { Row, Col, Card, Icon, Avatar } from "antd";
import ReactLogo from "../../../assets/images/react.png";
import MobxSvg from "../../../assets/images/mobx.svg";
import antdLogo from "../../../assets/images/antd.png";

import "../stylesheets/App.scss";

const { Meta } = Card;

function App() {
  return (
    <Row type="flex" justify="center" align="middle" className="app-container">
      <Col span={24} className="card-container">
        <Card
          style={{ width: 600 }}
          cover={<img alt="example" src={ReactLogo} />}
          actions={[
            <Icon type="setting" />,
            <Icon type="edit" />,
            <Icon type="ellipsis" />
          ]}
          extra={<Avatar src={MobxSvg} size="large" />}
        >
          <Meta
            avatar={<Avatar src={antdLogo} size="large" />}
            title="React Mobx Antd starter App"
            description="eject CRA and modify webpack congig to add support Mobx and Antd"
          />
        </Card>
      </Col>
    </Row>
  );
}

export default App;
