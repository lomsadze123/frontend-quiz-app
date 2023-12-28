import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";

const App = () => {
  return (
    <div className="p-5">
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </div>
  );
};

export default App;
