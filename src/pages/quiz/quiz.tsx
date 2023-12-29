import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { DataTypes } from "../../types/Types";

const quiz = () => {
  const [data, setData] = useState<DataTypes[]>();
  const location = useLocation();
  const [count, setCount] = useState(0);
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

  return (
    <main className="flex flex-col gap-9 md:gap-11 lg:flex-row lg:justify-between max-w-[1470px] lg:mx-auto">
      <section className="flex flex-col gap-3 md:gap-[27.5px]">
        <p className="italic text-[#313E51] text-sm md:text-xl">
          Question {count + 1} of 10
        </p>
        {data?.map(
          (items, index) =>
            count === index && (
              <h2
                key={index}
                className="text-[#313E51] text-xl font-medium md:text-4xl"
              >
                {items.question}
              </h2>
            )
        )}
        <progress
          className="pb-[6px] w-full [&::-moz-progress-bar]:bg-white [&::-webkit-progress-bar]:bg-white [&::-webkit-progress-bar]:rounded-full [&::-webkit-progress-bar]:p-[1.5px]
          [&::-webkit-progress-value]:rounded-full [&::-webkit-progress-value]:bg-purple lg:mt-auto"
          max="10"
          value="0"
        ></progress>
      </section>
      <div>
        <section className="flex flex-col gap-[10px] shadow-sm md:gap-[25px]">
          {data?.map(
            (items, index) =>
              count === index &&
              items.options.map((option, i) => (
                <button
                  key={option}
                  className="flex items-center gap-5 text-lg text-[#313E51] font-medium bg-white px-3 py-[10px] leading-[100%] rounded-[12px] md:px-5 md:py-[17.5px]
                  md:text-[28px] md:rounded-[24px] md:gap-[30px]"
                >
                  <span className="inline-block rounded-xl p-[15px] bg-[#F4F6FA] text-[#626C7F]">
                    {list[i]}
                  </span>
                  <span>{option}</span>
                </button>
              ))
          )}
        </section>
        <button
          onClick={() => setCount(count + 1)}
          className="w-full bg-[#A729F5] text-lg py-[17.5px] leading-[100%] text-white rounded-[12px] font-medium md:py-8 md:text-[28px] md:rounded-[24px] mt-5"
        >
          Submit Answer
        </button>
      </div>
    </main>
  );
};

export default quiz;
