import cn from "../lib/Utility";

const InputField = ({
  inputLabel,
  name,
  placeholder,
  type,
  register,
  className,
  errors,
}) => {
  return (
    <>
      <label className={cn("text-xl block py-2 font-semibold")}>{inputLabel}</label>

      <input
        className={cn("border p-2 text-xl w-full rounded-md", className)}
        {...register(name)}
        type={type}
        placeholder={placeholder}
      />

      {errors[name] && (
        <p className="text-red-500 font-semibold">{errors[name].message}</p>
      )}
    </>
  );
};

export default InputField;
