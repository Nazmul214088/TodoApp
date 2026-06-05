import { useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import TableData from "../Components/TableData";
import cn from "../lib/Utility";
import { useTheme } from "../Hooks/useTheme";
import Header from "../Components/Header";
import ConfirmModal from "../Components/ConfirmModal";
import useTask from "../Hooks/useTask";

const Home = () => {
  const newTaskModalRef = useRef();
  const editTaskModalRef = useRef();
  const deleteTaskModalRef = useRef();

  const {
    addTask,
    handleUndo,
    tasks,
    handleDeleteBtn,
    handleEditTask,
    handleComplete,
  } = useTask();
  const { theme } = useTheme();
  const [selectedTask, setSelectedTask] = useState();
  const [deleteTask, setDeleteTask] = useState();

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
  const handleUndoBtn = (task) => {
    handleUndo(task);
  };

  const openDeleteConfirmModal = (task) => {
    setDeleteTask(task);
    deleteTaskModalRef.current.showModal();
  };

  const handleDelete = () => {
    handleDeleteBtn(deleteTask.id);
    deleteTaskModalRef.current.close();
  };

  return (
    <div className="dark:bg-[#44526a] py-8">
      <ConfirmModal
        modalRef={deleteTaskModalRef}
        modalMessage="Are you sure you want to delete this task?"
        messageNote="This action cannot be undone. "
        onClick={handleDelete}
      />
      <Modal
        modalRef={editTaskModalRef}
        defaultValue={selectedTask?.title}
        modalText={"Update Task"}
        onSubmit={(e) => handleEditTaskBtn(e, selectedTask)}
      />
      <Modal
        modalRef={newTaskModalRef}
        onSubmit={handleAddTaskBtn}
        modalText={"Add New Task"}
      />

      <div className="flex justify-between my-8 w-[95%] mx-auto">
        <Header title=" All Todo lists:" />
        <Button
          className="px-6 py-2 bg-[#03fd25]"
          title="Add New Task"
          type="button"
          onClick={() => newTaskModalRef.current.showModal()}
        />
      </div>

      {tasks.length === 0 ? (
        <Header title="No Task found! " className="text-red-500 text-center" />
      ) : (
        <table className="border-collapse border w-[95%] mx-auto">
          <thead>
            <tr>
              {headerData.map((header) => (
                <TableHeader
                  key={header.title}
                  title={header.title}
                  className="text-black dark:text-white"
                />
              ))}
            </tr>
            {tasks.map((task) => (
              <tr key={task.id}>
                <TableData
                  tData={task.title}
                  className="text-black dark:text-white"
                />
                <TableData
                  tData={task.isComplete === true ? "Completed" : "Incomplete"}
                  isComplete={task.isComplete}
                  className={"font-semibold"}
                />
                <TableData
                  tData={task.date}
                  className="text-black dark:text-white"
                />
                <TableData
                  tData={
                    <>
                      {!task.isComplete ? (
                        <Button
                          className={"bg-[#081fca] px-6 py-2 text-white"}
                          title={"Complete"}
                          type="button"
                          onClick={() => handleCompleteBtn(task)}
                        />
                      ) : (
                        <Button
                          title="Undo"
                          type="button"
                          onClick={() => handleUndoBtn(task)}
                          className={"bg-indigo-500 px-6 py-2 text-white"}
                        />
                      )}

                      <Button
                        type="button"
                        className={"bg-[#01c726] px-6 py-2 mx-2 text-white"}
                        onClick={() => openEditModal(task)}
                        title={<BiEdit />}
                      />
                      <Button
                        type="button"
                        className={"bg-[#ca0808] px-6 py-2 text-white"}
                        onClick={() => openDeleteConfirmModal(task)}
                        title={<FaRegTrashAlt />}
                      />
                    </>
                  }
                  className={"text-right"}
                />
              </tr>
            ))}
          </thead>
        </table>
      )}
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
