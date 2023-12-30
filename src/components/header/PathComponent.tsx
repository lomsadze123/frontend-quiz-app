import images from "../../services/Images";

const PathComponent = ({
  index,
  pathname,
}: {
  index: any;
  pathname: string;
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
          <p className="text-lg text-[#313E51] font-medium md:text-[28px]">
            {pathname}
          </p>
        </>
      )}
    </div>
  );
};

export default PathComponent;
