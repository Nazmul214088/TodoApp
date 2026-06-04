import Button from "./Button";

const Modal = ({ modalRef, modalText, ...props }) => {
  return (
    <dialog
      ref={modalRef}
      className="p-8 fixed top-15 mx-auto rounded-2xl dark:bg-[#50627a] dark:text-white "
    >
      <div className=" w-5/6 mx-auto relative">
        {/* <form onSubmit={(e) => handleEditTaskBtn(e, selectedTask)}> */}
        <form {...props}>
          <label className="text-xl font-semibold">Task title: </label>
          <input
            type="text"
            className="text-xl w-full p-2 border rounded-xl my-2"
            name="title"
            placeholder="Task Title"
            {...props}
          />

          <Button
            className={"bg-[#1dff34] px-6 py-2 absolute bottom-0 left-0"}
            type="submit"
            title={modalText}
          />
        </form>
        <div className="">
          <form method="dialog" className="flex justify-end mt-15">
            <Button className={"bg-[#ff1d1d] px-6 py-2"} title={"Close"} />
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
