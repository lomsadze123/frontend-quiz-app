import { useLocation } from "react-router-dom";
import images from "../../services/Images";
import { list } from "../navigationList/NavList";

const PathComponent = ({
  index,
  pathname,
  mode,
}: {
  index: any;
  pathname: string;
  mode: string | (() => void);
}) => {
  return (
    <div className={"flex justify-center items-center gap-5 md:gap-[30px]"}>
      {" "}
      {index && (
        <>
          <img
            className="p-[5px] w-10 h-10 bg-[#f4f6fa]"
            src={
              typeof index.index !== "number"
                ? images[index.index.index]
                : images[index.index]
            }
            alt={pathname + " icon"}
          />
          <p
            className={`text-lg ${
              mode === "light" ? "text-[#313E51]" : "text-white"
            } font-medium md:text-[28px]`}
          >
            {list[index.index.index || index.index] || list[0]}
          </p>
        </>
      )}
    </div>
  );
};

export default PathComponent;
