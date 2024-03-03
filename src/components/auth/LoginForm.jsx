import { useNavigate } from "react-router-dom";
import Field from "../common/Field";
import { useForm } from "react-hook-form";
import { useAuth } from "../../hooks/useAuth.js";
import axios from "axios";

const LoginForm = () => {
  const { setAuth } = useAuth();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm();

  const submitForm = async (formData) => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_BASE_URL}/auth/login`,
        formData
      );
      if (response.status === 200) {
        const { token, user } = response.data;
        if (token) {
          const authToken = token.token;
          const refreshToken = token.refreshToken;
          console.log(`Login time auth token: ${authToken}`);
          setAuth({ user,authToken,refreshToken });
          navigate("/");
        }
      }
    } catch (error) {
      console.log(error);
      setError("Root.random",{
        type:"random",
        message: `user with email ${formData.email} is not found!`
      })
    }
  };
  return (
    <form
      className="border-b border-[#3F3F3F] pb-10 lg:pb[60px]"
      onSubmit={handleSubmit(submitForm)}
    >
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
        <button className="auth-input bg-lwsGreen fron-bold text-deepDark transition-all hover:opacity-90">
          Login
        </button>
      </Field>
    </form>
  );
};

export default LoginForm;
