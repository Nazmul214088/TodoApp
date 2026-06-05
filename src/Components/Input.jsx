const Input = ({ inputLabel, name, placeholder, type, register, errors }) => {
  return (
    <>
      <label className="text-xl block py-2">{inputLabel}</label>

      <input
        className="border p-2 text-xl w-full rounded-md"
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

export default Input;
