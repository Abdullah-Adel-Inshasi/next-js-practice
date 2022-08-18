import React from "react";
import styled from "styled-components";
import { ITask } from "../../initial-data";

const Container = styled.div`
  border: 1px solid lightgrey;
  border-radius: 2px;
  padding: 8px;
  margin-bottom: 8px;
`;

const Task = ({ task }: { task: ITask }) => {
  return <Container>{task.content}</Container>;
};

export default Task;
