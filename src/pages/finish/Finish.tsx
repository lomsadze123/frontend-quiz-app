import { Link, useLocation } from "react-router-dom";
import PathComponent from "../../components/header/PathComponent";
import { motion } from "framer-motion";

const Finish = ({ mode }: { mode: string | (() => void) }) => {
  const location = useLocation();
  const index = location.state;
  const { score, pathname } = location.state;

  return (
    <div className="flex flex-col gap-10 lg:flex-row lg:justify-between max-w-[1470px] lg:mx-auto">
      <article>
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className={`text-[40px] ${
            mode === "light" ? "text-[#313E51]" : "text-white"
          } font-light leading-[100%] md:text-[64px]`}
        >
          Quiz completed <br />{" "}
          <span className="font-medium">You scored...</span>{" "}
        </motion.h1>
      </article>
      <div className="flex-1 max-w-[765px]">
        <motion.article
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className={`${
            mode === "light"
              ? "text-[#313E51] bg-white"
              : "text-white bg-[#3B4D66]"
          } p-[50px] rounded-[12px] text-center`}
        >
          <PathComponent index={index} pathname={pathname} mode={mode} />
          <h2 className="text-[88px] font-medium leading-[100%] mt-10 md:text-[144px]">
            {score}
          </h2>
          <p className=" text-lg mt-3 md:text-2xl md:mt-4">out of 10</p>
        </motion.article>
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
