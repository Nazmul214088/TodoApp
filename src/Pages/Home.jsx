import { useRef } from "react";

const Home = () => {
  const modalRef = useRef();
  let allTasks = [
    {
      id: 1,
      title: "Learn JavaScript Array Methods",
      description: "Practice map, filter, reduce, and find methods.",
      status: "Pending",
      priority: "High",
      dueDate: "2026-06-05",
    },
    {
      id: 2,
      title: "Complete React Project",
      description: "Finish the Todo App UI and functionality.",
      status: "In Progress",
      priority: "High",
      dueDate: "2026-06-10",
    },
    {
      id: 3,
      title: "Study Redux",
      description: "Learn Redux Toolkit and state management.",
      status: "Pending",
      priority: "Medium",
      dueDate: "2026-06-12",
    },
    {
      id: 4,
      title: "Practice DSA Problems",
      description: "Solve 5 array and string problems.",
      status: "Completed",
      priority: "Medium",
      dueDate: "2026-06-01",
    },
    {
      id: 5,
      title: "Update Portfolio Website",
      description: "Add latest MERN projects and skills.",
      status: "Pending",
      priority: "Low",
      dueDate: "2026-06-15",
    },
    {
      id: 6,
      title: "Prepare for Interview",
      description: "Review JavaScript, React, and MongoDB concepts.",
      status: "In Progress",
      priority: "High",
      dueDate: "2026-06-08",
    },
    {
      id: 7,
      title: "Read Clean Code Book",
      description: "Read Chapter 1 to Chapter 3.",
      status: "Pending",
      priority: "Low",
      dueDate: "2026-06-20",
    },
    {
      id: 8,
      title: "Build Authentication System",
      description: "Implement JWT authentication in MERN stack.",
      status: "Pending",
      priority: "High",
      dueDate: "2026-06-18",
    },
  ];
  console.log(new Date().toISOString().split("T")[0]);
  return (
    <div>
      <div className="flex justify-between my-8">
        <h2 className="text-xl font-bold">All Todo lists: </h2>
        <button
          className="px-6 py-2 bg-[#03fd25] cursor-pointer rounded-xl"
          onClick={() => modalRef.current.showModal()}
        >
          open modal
        </button>
      </div>
      <dialog ref={modalRef} className="p-8 fixed top-15 mx-auto rounded-2xl">
        <div className=" w-4/6">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Click the button below to close lo</p>
          <div className="modal-action">
            <form method="dialog">
              <button className="px-6 py-2 bg-[#ff1d1d] cursor-pointer rounded-xl">
                Close
              </button>
            </form>
          </div>
        </div>
      </dialog>

      <table className="border-collapse border w-full">
        <thead>
          <tr>
            <th className=" border border-gray-300 p-3">Title</th>
            <th className=" border border-gray-300 p-3">Status</th>
            <th className=" border border-gray-300 p-3">Date</th>
          </tr>
          {allTasks.map((task) => (
            <tr key={task.id}>
              <td className=" border border-gray-300 p-3">{task.title} </td>
              <td className=" border border-gray-300 p-3">{task.status}</td>
              <td className=" border border-gray-300 p-3">{task.dueDate}</td>
            </tr>
          ))}
        </thead>
      </table>
    </div>
  );
};

export default Home;
