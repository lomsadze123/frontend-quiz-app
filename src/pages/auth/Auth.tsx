import { useForm } from "react-hook-form";
import { FormTypes } from "../../types/Types";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const validationSchema = Yup.object().shape({
  username: Yup.string().required("This field is required"),
  email: Yup.string()
    .required("This field is required")
    .email("Invalid email address"),
  password: Yup.string()
    .required("This field is required")
    .min(5, "Minimum length is 5"),
});

const Auth = ({ mode }: { mode: string | (() => void) }) => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormTypes>({
    resolver: yupResolver(validationSchema),
  });
  const navigate = useNavigate();

  const onSubmit = async () => {
    if (getValues("email") && getValues("password"))
      try {
        navigate("/home");
        reset();
      } catch (error) {
        console.error(error);
      } finally {
      }
  };

  return (
    <motion.form
      initial={{ opacity: 0, y: -100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col items-center gap-[58.4px] text-[15px] md:gap-[72.4px]"
    >
      <div
        className={`${
          mode === "light" ? "bg-white text-black" : "bg-[#3B4D66] text-white"
        } p-6 w-full rounded-[10px] max-w-[400px] md:w-[400px] md:p-8 shadow-md`}
      >
        <div className="my-10 flex flex-col gap-6">
          <div className="relative">
            <input
              {...register("username")}
              className={`${
                mode === "light" ? "bg-white" : "bg-[#3B4D66]"
              } outline-0 border-b-[1px] ${
                errors.username?.message
                  ? "border-b-[#FC4748]"
                  : "border-b-[#42495a]"
              } pb-[18px] pl-4 w-full`}
              type="text"
              placeholder="username"
            />
            {errors.username?.message && (
              <p className="text-[#FC4747] absolute right-0 top-0">
                {errors.username?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("email")}
              className={`${
                mode === "light" ? "bg-white" : "bg-[#3B4D66]"
              } outline-0 border-b-[1px] ${
                errors.email?.message
                  ? "border-b-[#FC4748]"
                  : "border-b-[#42495a]"
              } pb-[18px] pl-4 w-full`}
              type="email"
              placeholder="Email address"
            />
            {errors.email?.message && (
              <p className="text-[#FC4747] absolute right-0 top-0">
                {errors.email?.message}
              </p>
            )}
          </div>
          <div className="relative">
            <input
              {...register("password")}
              className={`${
                mode === "light" ? "bg-white" : "bg-[#3B4D66]"
              } outline-0 border-b-[1px] ${
                errors.email?.message
                  ? "border-b-[#FC4747]"
                  : "border-b-[#42495a]"
              } pb-[18px] pl-4 w-full`}
              type="password"
              placeholder="Password"
            />
            {errors.password?.message && (
              <p className="text-[#FC4747] absolute right-0 top-0">
                {errors.password.message}
              </p>
            )}
          </div>
        </div>
        <button className="bg-[#A729F5] text-white rounded py-[14px] w-full mb-6">
          SUBMIT
        </button>
      </div>
    </motion.form>
  );
};

export default Auth;
