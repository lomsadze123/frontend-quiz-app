import NavList from "../../components/navigationList/NavList";
import Welcome from "../../components/welcome/Welcome";

const Home = () => {
  return (
    <div className="flex flex-col gap-10">
      <Welcome />
      <NavList />
    </div>
  );
};

export default Home;
