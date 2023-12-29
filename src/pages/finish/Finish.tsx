import { Link } from "react-router-dom";
import PathComponent from "../../components/header/PathComponent";

const Finish = () => {
  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between max-w-[1470px] lg:mx-auto">
      <article>
        <h1 className="text-[40px] text-[#313E51] font-light leading-[100%] md:text-[64px]">
          Quiz completed <br />{" "}
          <span className="font-medium">You scored...</span>{" "}
        </h1>
      </article>
      <div className="flex-1 max-w-[765px]">
        <article className="bg-white text-[#313E51] p-[50px] rounded-[12px] text-center">
          <PathComponent />
          <h2 className="text-[88px] font-medium leading-[100%] mt-10 md:text-[144px]">
            0
          </h2>
          <p className=" text-lg mt-3 md:text-2xl md:mt-4">out of 10</p>
        </article>
        <Link to="/home">
          <button className="w-full bg-[#A729F5] text-lg py-[17.5px] leading-[100%] text-white rounded-[12px] font-medium md:py-8 md:text-[28px] md:rounded-[24px] mt-5">
            Play Again
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Finish;
