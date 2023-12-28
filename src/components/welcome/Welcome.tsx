const Welcome = () => {
  return (
    <div>
      <h1 className="text-[40px] text-[#313E51] font-light leading-[100%]">
        Welcome to the <br />{" "}
        <span className="font-medium">Frontend Quiz!</span>
      </h1>
      <p className="text-lg italic text-[#626C7F] mt-5">
        Pick a subject to get started.
      </p>
    </div>
  );
};

export default Welcome;
