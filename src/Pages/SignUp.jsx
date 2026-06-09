import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../Components/Button";
import { signUpScheme } from "../schema/SignUpScheme";
import { useNavigate } from "react-router";
import InputField from "../Components/InputField";

const SignUp = () => {
  const navigate = useNavigate();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpScheme) });
  const onSubmit = (data) => {
    console.log(data);
    navigate("/");
  };
  return (
    <div className="w-4/6 mx-auto">
      <h2 className="text-5xl font-semibold py-4">Welcome to back Todo APP </h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputField
          inputLabel="Name"
          name="name"
          placeholder="Enter your Name"
          type="text"
          register={register}
          errors={errors}
        />
        <InputField
          inputLabel="Email"
          name="email"
          placeholder="Enter your Email"
          type="email"
          register={register}
          errors={errors}
        />
        <InputField
          inputLabel="Phone Number"
          name="phone"
          placeholder="Enter your Phone Number"
          type="number"
          register={register}
          errors={errors}
        />
        <Button
          className="py-2 px-4 bg-blue-500 block"
          type="submit"
          title="Sign In"
        />
      </form>
    </div>
  );
};

export default SignUp;
