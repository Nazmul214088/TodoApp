import { useRef } from "react";
import Button from "./Button";
import InputField from "./InputField";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { signUpScheme } from "../schema/SignUpScheme";

const Modal = ({ modalRef, modalText, ...props }) => {
  const formRef = useRef();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpScheme) });
  return (
    <dialog
      ref={modalRef}
      className="p-8 w-9/10 lg:w-1/3 fixed top-15 mx-auto rounded-2xl dark:bg-[#50627a] dark:text-white "
    >
      <div className="relative">
        <form ref={formRef} onSubmit={handleSubmit(props.onSubmit)}>
          <InputField
            inputLabel="Task title:"
            name="title"
            className="my-2 "
            placeholder="Task Title"
            type="text"
            register={register}
            errors={errors}
          />

          <Button
            className={"bg-[#1dff34] px-6 py-2 absolute bottom-0 left-0"}
            type="submit"
            title={modalText}
          />
        </form>
        <form method="dialog" className="flex justify-end mt-15">
          <Button
            className={"bg-[#ff1d1d] px-6 py-2"}
            type="button"
            onClick={() => {
              formRef.current.reset();
              modalRef.current.close();
            }}
            title={"Close"}
          />
        </form>
      </div>
    </dialog>
  );
};

export default Modal;
