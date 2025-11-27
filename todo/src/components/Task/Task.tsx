import React from 'react';

interface Props extends React.PropsWithChildren {
  text: string;
  delFunc: () => void;
}


const Task: React.FC<Props> = ({ text, delFunc }) => {
    return (
      <div className="shadow-md rounded-md overflow-hidd py-3 px-2 flex justify-between">
        <p className="pr-12 break-all">{text}</p>
        <button onClick={delFunc} className="cursor-pointer">Delete</button>
      </div>
    );
};

export default Task;