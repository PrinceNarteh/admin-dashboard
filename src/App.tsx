import React from "react";
import { Column } from "./components/Column";
import { Row } from "./components/Row";

function App() {
  return (
    <Row style={{ backgroundColor: "teal" }}>
      <Column lg={10} md={4} style={{ backgroundColor: "red" }}>
        <h1>Admin Dashboard</h1>
      </Column>
      <Column lg={2} md={5} style={{ backgroundColor: "red" }}>
        <h1>Admin Dashboard</h1>
      </Column>
    </Row>
  );
}

export default App;
