import Button from "./Button";

const ConfirmModal = ({ modalRef, modalMessage, messageNote, ...props }) => {
  return (
    <dialog ref={modalRef} className="top-50 p-8 rounded-2xl mx-auto w-1/3">
      <div className="">
        <h3 className="text-2xl font-semibold">{modalMessage}</h3>
        <p className="text-red-500 mb-15 py-4">Note: {messageNote}</p>
      </div>
      <form method="modal" className="flex justify-between">
        <Button
          className="py-2 px-4 bg-red-500 text-white "
          type="button"
          title="Delete"
          onClick={() => props.onClick()}
        />
        <Button
          className="py-2 px-4 bg-[#04c331] text-white ml-auto"
          type="button"
          title="Cancel"
          onClick={() => modalRef.current.close()}
        />
        <Button />
      </form>
    </dialog>
  );
};

export default ConfirmModal;
