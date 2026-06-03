import { useContext, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import { taskContext } from "../Contexts/TaskProvider";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import TableData from "../Components/TableData";
import { useTheme } from "../Contexts/ThemeContext";
import cn from "../lib/Utility";

const Home = () => {
  const newTaskModalRef = useRef();
  const editTaskModalRef = useRef();

  const { addTask, tasks, handleDeleteBtn, handleEditTask, handleComplete } =
    useContext(taskContext);
  const [selectedTask, setSelectedTask] = useState();
  const { theme } = useTheme();

  const handleAddTaskBtn = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    addTask(title);
    e.target.reset();
    newTaskModalRef.current.close();
  };

  const openEditModal = (task) => {
    setSelectedTask(task);
    editTaskModalRef.current.showModal();
  };

  const handleEditTaskBtn = (e, t) => {
    handleEditTask(e, t);
    e.target.reset();
    editTaskModalRef.current.close();
  };

  const handleCompleteBtn = (task) => {
    handleComplete(task);
  };

  return (
    <div className={theme == "light" ? "bg-white" : "bg-black"}>
      <div className="flex justify-between my-8 w-[80%] mx-auto">
        <h2 className="text-xl font-bold py-4 dark:text-[#ffffff]">
          All Todo lists:{" "}
        </h2>
        <button
          className="px-6 py-2 bg-[#03fd25] cursor-pointer rounded-xl"
          onClick={() => newTaskModalRef.current.showModal()}
        >
          Add New Task
        </button>
      </div>
      {/* <dialog
        ref={newTaskModalRef}
        className="p-8 fixed top-15 mx-auto rounded-2xl"
      >
        <div className=" w-5/6 mx-auto">
          <form onSubmit={handleAddTaskBtn}>
            <label className="text-xl font-semibold">Task title: </label>
            <input
              type="text"
              className="text-xl w-full p-2 border rounded-xl my-2"
              name="title"
              placeholder="Task title"
            />
            <button
              className="px-6 py-2 bg-[#1dff34] cursor-pointer rounded-xl"
              type="submit"
            >
              Add New Task
            </button>
          </form>
          <div className="modal-action">
            <form method="dialog" className="flex justify-end">
              <button className="px-6 py-2 bg-[#ff1d1d] cursor-pointer rounded-xl">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog> */}
      <Modal
        modalRef={newTaskModalRef}
        onSubmit={handleAddTaskBtn}
        modalText={"Add New Task"}
      />

      <table className="border-collapse border w-[80%] mx-auto">
        <thead>
          <tr>
            {headerData.map((header) => (
              <TableHeader
                key={header.title}
                title={header.title}
                className={theme === "light" ? "text-black" : "text-white"}
              />
            ))}
          </tr>
          {tasks.map((task) => (
            <tr key={task.id}>
              {/* <td className=" border border-gray-300 p-3">{task.title} </td> */}
              <TableData
                tData={task.title}
                className={theme === "light" ? "text-black" : "text-white"}
              />
              <TableData
                tData={task.isComplete === true ? "Completed" : "Incomplete"}
                isComplete={task.isComplete}
                className={"font-semibold"}
              />
              <TableData
                tData={task.date}
                className={theme === "light" ? "text-black" : "text-white"}
              />
              <TableData
                tData={
                  <>
                    {!task.isComplete && (
                      <Button
                        className={"bg-[#081fca]"}
                        title={"Complete"}
                        onClick={() => handleCompleteBtn(task)}
                      />
                    )}
                    <Button
                      className={"bg-[#ca0808]"}
                      onClick={() => handleDeleteBtn(task.id)}
                      title={<FaRegTrashAlt />}
                    />
                    <Button
                      className={"bg-[#01c726]"}
                      onClick={() => openEditModal(task)}
                      title={<BiEdit />}
                    />
                  </>
                }
                className={"text-right"}
              />
            </tr>
          ))}
        </thead>
      </table>
      <Modal
        modalRef={editTaskModalRef}
        defaultValue={selectedTask?.title}
        modalText={"Update Task"}
        onSubmit={(e) => handleEditTaskBtn(e, selectedTask)}
      />
    </div>
  );
};

export default Home;

const TableHeader = ({ className, title }) => {
  return (
    <th className={cn(" border border-gray-300 p-3", className)}>{title}</th>
  );
};

const headerData = [
  { title: "Title" },
  { title: "Status" },
  { title: "Date" },
  { title: "Actions" },
];
