import { useForm } from "react-hook-form";
import { FormTypes } from "../../types/Types";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const {
    handleSubmit,
    register,
    getValues,
    reset,
    formState: { errors },
  } = useForm<FormTypes>();
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      noValidate
      className="flex flex-col items-center gap-[58.4px] text-[15px] md:gap-[72.4px]"
    >
      <div className="text-white bg-[#626C7F] p-6 w-full rounded-[10px] max-w-[400px] md:w-[400px] md:p-8">
        <div className="my-10 flex flex-col gap-6">
          <div className="relative">
            <input
              {...register("email", {
                required: "This field is required",
                pattern: {
                  value:
                    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                  message: "Invalid email address",
                },
              })}
              className={`bg-[#626C7F] outline-0 border-b-[1px] ${
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
              {...register("password", {
                required: "This field is required",
                minLength: {
                  value: 5,
                  message: "Minimum length is 5",
                },
              })}
              className={`bg-[#626C7F] outline-0 border-b-[1px] ${
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
        <button className="bg-[#FC4747] rounded py-[14px] w-full mb-6">
          SUBMIT
        </button>
      </div>
    </form>
  );
};

export default Auth;
