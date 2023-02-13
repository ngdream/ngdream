import React from "react";
import ReactMarkdown from 'react-markdown'
import { Row } from "react-bootstrap";

const Leetcode = () => {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
      <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
        <strong className="yellow">LeetCode</strong> Stat
      </h1>
      <ReactMarkdown>
      ![LeetCode Stats](https://wakatime.com/share/@645d519a-0eaa-4147-a299-aab0a39b7304/a7004a0c-effa-4c5c-9f80-19bc4d683185.svg)
      </ReactMarkdown>
    </Row>
  );
}

export default Leetcode;
