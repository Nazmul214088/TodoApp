import { useContext, useRef, useState } from "react";
import { BiEdit } from "react-icons/bi";
import { FaRegTrashAlt } from "react-icons/fa";
import Button from "../Components/Button";
import Modal from "../Components/Modal";
import TableData from "../Components/TableData";
import cn from "../lib/Utility";
import { useTheme } from "../Hooks/useTheme";
import { TaskContext } from "../Contexts/TaskContext";
import ComponentHeader from "../Components/ComponentHeader";

const Home = () => {
  const newTaskModalRef = useRef();
  const editTaskModalRef = useRef();

  const {
    addTask,
    handleUndo,
    tasks,
    handleDeleteBtn,
    handleEditTask,
    handleComplete,
  } = useContext(TaskContext);
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
  const handleUndoBtn = (task) => {
    handleUndo(task);
  };

  return (
    <div
      // className={theme == "light" ? "bg-white" : "bg-black"}
      className="dark:bg-[#44526a] py-8"
    >
      <div className="flex justify-between my-8 w-[95%] mx-auto">
        <ComponentHeader title=" All Todo lists:" />
        <Button
          className="px-6 py-2 bg-[#03fd25]"
          title="Add New Task"
          onClick={() => newTaskModalRef.current.showModal()}
        />
      </div>
      <Modal
        modalRef={newTaskModalRef}
        onSubmit={handleAddTaskBtn}
        modalText={"Add New Task"}
      />

      {tasks.length ===0?<ComponentHeader title="No Task found! " className="text-red-500 text-center" />:<table className="border-collapse border w-[95%] mx-auto">
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
                    {!task.isComplete ? (
                      <Button
                        className={"bg-[#081fca] px-6 py-2 text-white"}
                        title={"Complete"}
                        onClick={() => handleCompleteBtn(task)}
                      />
                    ) : (
                      <Button
                        title="Undo"
                        onClick={() => handleUndoBtn(task)}
                        className={"bg-indigo-500 px-6 py-2 text-white"}
                      />
                    )}

                    <Button
                      className={"bg-[#01c726] px-6 py-2 mx-2 text-white"}
                      onClick={() => openEditModal(task)}
                      title={<BiEdit />}
                    />
                    <Button
                      className={"bg-[#ca0808] px-6 py-2 text-white"}
                      onClick={() => handleDeleteBtn(task.id)}
                      title={<FaRegTrashAlt />}
                    />
                  </>
                }
                className={"text-right"}
              />
            </tr>
          ))}
        </thead>
      </table>}
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
