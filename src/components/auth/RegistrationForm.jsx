import { useForm } from "react-hook-form";
import Field from "../common/Field";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const RegistrationForm = () => {
    const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();


  const submitForm = async (formData) => {
    console.log(formData)
    try {
        let response = await axios.post (`${import.meta.env.VITE_SERVER_BASE_URL}/auth/register`,formData);
        if(response.status ===201){
            navigate("/login")
        }
    } catch(error){
        setError("Root.random",{
            type:"random",
            message: `something went wrong ${error.message} is not found!`
          })

    }
  }

  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb[30px]"
      onSubmit={handleSubmit(submitForm)}
    >
      <Field label="First Name" error={errors.firstName}>
        <input
          type="firstName"
          name="firstName"
          id="firstName"
          className={`auth-input ${
            errors.firstName ? "border-red-500" : "border-gray-200"
          }`}
          {...register("firstName", { required: "Email Id is Required" })}
        />
      </Field>
      <Field label="Last Name" error={errors.lastName}>
        <input
          type="lastName"
          name="lastName"
          id="lastName"
          className={`auth-input ${
            errors.lastName ? "border-red-500" : "border-gray-200"
          }`}
          {...register("lastName")}
        />
      </Field>
      <Field label="Email" error={errors.email}>
        <input
          type="email"
          name="email"
          id="email"
          className={`auth-input ${
            errors.email ? "border-red-500" : "border-gray-200"
          }`}
          {...register("email", { required: "Email Id is Required" })}
        />
      </Field>
      <Field label="Password" error={errors.password}>
        <input
          type="text"
          name="password"
          id="password"
          className={`auth-input ${
            errors.password ? "border-red-500" : "border-gray-200"
          }`}
          {...register("password", {
            required: "password Id is Required",
            minLength: {
              value: 8,
              message: "Password must be at least 8 characters",
            },
          })}
        />
      </Field>
      <p>{errors?.root?.random?.message}</p>
      <Field>
        <button className="auth-input bg-lwsGreen fron-bold text-deepDark transition-all hover:opacity-90" type="submit">
          Register
        </button>
      </Field>
    </form>
  );
};

export default RegistrationForm;
