import { useLocation } from "react-router-dom";
import images from "../../services/Images";

const PathComponent = () => {
  const location = useLocation();
  const index = location.state;
  const pathname = location.pathname.slice(1);

  return (
    <div className="flex items-center gap-5 md:gap-[30px]">
      {" "}
      {index && (
        <>
          <img
            className="p-[5px] w-10 h-10 bg-[#f4f6fa]"
            src={images[index.index]}
            alt={pathname + " icon"}
          />
          <p className="text-lg text-[#313E51] font-medium md:text-[28px]">
            {pathname}
          </p>
        </>
      )}
    </div>
  );
};

export default PathComponent;
