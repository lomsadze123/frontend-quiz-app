import { motion } from "framer-motion";

const Welcome = ({ mode }: { mode: string }) => {
  return (
    <div>
      <motion.h1
        initial={{ x: 100 }}
        animate={{ x: 0 }}
        transition={{ type: "spring", stiffness: 100 }}
        className={`text-[40px] ${
          mode === "light" ? "text-[#313E51]" : "text-white"
        } font-light leading-[100%] md:text-[64px]`}
      >
        Welcome to the <br />{" "}
        <span className="font-medium">Frontend Quiz!</span>
      </motion.h1>
      <p className="text-lg italic text-[#626C7F] mt-5 md:text-xl md:mt-[50px]">
        Pick a subject to get started.
      </p>
    </div>
  );
};

export default Welcome;
