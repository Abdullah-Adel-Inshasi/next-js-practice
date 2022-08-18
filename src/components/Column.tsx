import React from "react";
import styled from "styled-components";
import { IColumn, ITask } from "../../initial-data";
import Task from "./Task";

const Container = styled.div`
  margin: 8px;
  border: 1px solid lightgrey;
  border-radius: 2px;
`;
const Title = styled.h3`
  padding: 8px;
`;
const TaskList = styled.div`
  padding: 8px;
`;
const Column = ({ tasks, column }: { tasks: ITask[]; column: IColumn }) => {
  return (
    <Container>
      <Title>Title</Title>
      <TaskList>
        {tasks.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </TaskList>
    </Container>
  );
};

export default Column;
