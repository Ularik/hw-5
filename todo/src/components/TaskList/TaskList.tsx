import React, { useState } from "react";
import Task from "../Task/Task";
import CreateTaskForm from "../CreateTaskForm/CreateTaskForm";

interface Task {
  taskText: string;
  id: number;
  isDone: boolean;
}

export interface TaskLite {
  taskText: string;
  isDone: boolean;
}

const TaskList = () => {
    const [taskItems, setTaskItems] = useState<Task[]>([
      { taskText: "I am Groott!", id: 1, isDone: false },
      { taskText: "I am Groott!", id: 2, isDone: false },
      { taskText: "Hello bro, I am Draks!", id: 3, isDone: true },
    ]);

    const addTask = (taskObj: TaskLite) => {
      const maxId = taskItems.length > 0
        ? Math.max(...taskItems.map((task) => task.id))
        : 0;

      setTaskItems([{ ...taskObj, id: maxId + 1 }, ...taskItems]);
    };

    const delTask = (id: number) => {
      setTaskItems(taskItems.filter((task) => task.id !== id));
    }

    return (
      <div className="bg-sky-100 h-screen">
        <div className="w-2xl mx-auto py-7">
          <div className="mb-7">
            <CreateTaskForm addTask={addTask} />
          </div>
          <div className="flex flex-col gap-4">
            {taskItems.map((taskObj) => (
              <Task
                delFunc={() => delTask(taskObj.id)}
                key={taskObj.id}
                text={taskObj.taskText}
                isDone={taskObj.isDone}
              />
            ))}
          </div>
        </div>
      </div>
    );
}

export default TaskList;