import React, { useState } from "react";
import initialData, { InitialDataType } from "../../initial-data";
import Column from "../../src/components/Column";

const DragAndDrop = () => {
  const [data, setData] = useState<InitialDataType>(initialData);
  return (
    <>
      {data.columnOrder.map((columnId) => {
        const column = data.columns[columnId];
        const tasks = column.taskIds.map((taskId) => data.tasks[taskId]);

        return <Column key={columnId} column={column} tasks={tasks} />;
      })}
    </>
  );
};

export default DragAndDrop;
