import Button from "./Button";

const Modal = ({ modalRef, modalText, ...props }) => {
  return (
    <dialog ref={modalRef} className="p-8 fixed top-15 mx-auto rounded-2xl">
      <div className=" w-5/6 mx-auto">
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

          <Button className={"bg-[#1dff34]"} type="submit" title={modalText} />
        </form>
        <div className="modal-action">
          <form method="dialog" className="flex justify-end">
            <Button className={"bg-[#ff1d1d]"} title={"Close"} />
          </form>
        </div>
      </div>
    </dialog>
  );
};

export default Modal;
