import React, { useState } from "react"; // Убедитесь, что импортируете useState
import {type TaskLite} from "../TaskList/TaskList";


interface CreateProps extends React.PropsWithChildren {
  addTask: (form: TaskLite) => void;
}

const formPattern = {
  taskText: '',
  isDone: false
}

const CreateTaskForm: React.FC<CreateProps> = ({addTask}) => {
  const [form, setForm] = useState<TaskLite>(formPattern);

  const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, value} = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  }

  const sendTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    addTask(form);
    setForm(formPattern);
  }

  return (
    <form
      onSubmit={sendTask}
      className="grid gap-3 grid-cols-[minmax(400px,_1fr)_100px]"
    >
      <div>
        <input
          className="w-full p-2 rounded-md border-0 shadow-sm outline-none bg-gray-50"
          type="text"
          name="taskText"
          onChange={changeText}
          value={form.taskText}
        />
      </div>
      <button
        type="submit"
        className="shadow-sm rounded-md p-1 cursor-pointer bg-gray-50"
      >
        Add
      </button>
    </form>
  );
};

export default CreateTaskForm;
