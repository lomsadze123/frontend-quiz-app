import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { DataTypes } from "../../types/Types";
import { motion } from "framer-motion";

const quiz = ({ mode }: { mode: string | (() => void) }) => {
  const [data, setData] = useState<DataTypes[]>();
  const [count, setCount] = useState(0);
  const [choose, setChoose] = useState(-1);
  const [score, setScore] = useState(0);
  const [submit, setSubmit] = useState(0);
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname.slice(1);
  const index = location.state;
  const list = ["A", "B", "C", "D"];

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/data.json");
        setData(response.data.quizzes[location.state.index].questions);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const handleClick = (index: number) => {
    if (index !== -1) {
      setChoose(index);
    } else {
      setChoose(-1);
    }
  };

  return (
    <main className="flex flex-col gap-9 md:gap-11 lg:flex-row lg:justify-between max-w-[1470px] lg:mx-auto">
      <section
        className={`flex flex-col ${
          mode === "light" ? "text-[#313E51]" : "text-white"
        } gap-3 md:gap-[27.5px]`}
      >
        <p className="italic text-sm md:text-xl">Question {count + 1} of 10</p>
        {data?.map(
          (items, index) =>
            count === index && (
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                key={index}
                className="text-xl font-medium md:text-4xl"
              >
                {items.question}
              </motion.h2>
            )
        )}
        <progress
          className="pb-[6px] w-full [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:p-[1.5px]
          [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-purple lg:mt-auto"
          max="10"
          value={submit}
        ></progress>
      </section>
      <div>
        <motion.section
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
          className="flex flex-col gap-[10px] shadow-sm md:gap-[25px] lg:w-[750px]"
        >
          {data?.map(
            (items, index) =>
              count === index &&
              items.options.map((option, i) => (
                <button
                  onClick={() => {
                    handleClick(i);
                    if (items.options[i] === items.answer) {
                      setScore(score + 1);
                    }
                  }}
                  key={option}
                  className={`flex items-center gap-5 text-lg ${
                    mode === "light"
                      ? choose === i
                        ? "text-[#313E51] bg-white border-[#A729F5]"
                        : "text-[#313E51] bg-white border-white"
                      : choose === i
                      ? "text-white bg-[#3B4D66] border-[#A729F5]"
                      : "text-white bg-[#3B4D66] border-[#313E51]"
                  } font-medium px-3 py-[10px] leading-[100%] rounded-[12px] md:px-5 md:py-[17.5px]
                md:text-[28px] md:rounded-[24px] md:gap-[30px] border-[3px] transition-all duration-300 lg:hover:border-[#A729F5] group`}
                  disabled={submit > score}
                >
                  <span
                    className={`inline-block rounded-xl p-[15px] ${
                      choose === i
                        ? "bg-[#A729F5] text-white lg:group-hover:text-white"
                        : "bg-[#F4F6FA] lg:group-hover:text-[#A729F5]"
                    } text-[#626C7F] transition-all duration-300`}
                  >
                    {list[i]}
                  </span>
                  <span>{option}</span>
                </button>
              ))
          )}
        </motion.section>
        <button
          onClick={() => {
            if (choose !== -1) {
              setCount(count + 1);
              setSubmit(score);
              setChoose(-1);
              if (count === 9) {
                navigate("/finish", { state: { score, pathname, index } });
              }
            }
          }}
          className="w-full bg-[#A729F5] text-lg py-[17.5px] leading-[100%] text-white rounded-[12px] font-medium md:py-8 md:text-[28px] md:rounded-[24px] mt-5 transition-all duration-300 hover:opacity-50"
        >
          Submit Answer
        </button>
      </div>
    </main>
  );
};

export default quiz;
