import React, { useState } from 'react';

interface Props extends React.PropsWithChildren {
  text: string;
  delFunc: () => void;
  isDone: boolean;
}


const Task: React.FC<Props> = ({ text, delFunc, isDone }) => {
  const [isTaskDone, stateIsTaskDone] = useState(isDone);

    return (
      <div className="shadow-md rounded-md overflow-hidd py-3 px-2 flex justify-between bg-gray-50">
        <input
          onClick={() => stateIsTaskDone(!isTaskDone)}
          className="me-3"
          type="checkbox"
          defaultChecked={isTaskDone}
        />
        <p className={`pr-12 break-all ${isTaskDone ? "line-through" : ""}`}>
          {text}
        </p>
        <button onClick={delFunc} className="cursor-pointer">
          Delete
        </button>
      </div>
    );
};

export default Task;