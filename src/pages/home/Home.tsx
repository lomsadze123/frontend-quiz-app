import NavList from "../../components/navigationList/NavList";
import Welcome from "../../components/welcome/Welcome";

const Home = () => {
  return (
    <div className="flex flex-col gap-10 md:gap-[60px] lg:flex-row lg:justify-between max-w-[1470px] lg:mx-auto">
      <Welcome />
      <NavList />
    </div>
  );
};

export default Home;
