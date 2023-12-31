import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Finish from "./pages/finish/Finish";
import useDarkMode from "./hooks/useDarkmode";

const App = () => {
  const [mode, handleMode] = useDarkMode();

  return (
    <div
      className={`min-h-screen p-5 md:px-[60px] md:py-10 transition-all duration-300 ${
        mode === "light" ? "bg-[#f4f6fa]" : "bg-[#313E51]"
      }`}
    >
      <Header handleMode={handleMode} mode={mode} />
      <Routes>
        <Route path="/" element={<Auth mode={mode} />} />
        <Route path="/home" element={<Home mode={mode} />} />
        <Route path="/:id" element={<Quiz mode={mode} />} />
        <Route path="/finish" element={<Finish mode={mode} />} />
      </Routes>
    </div>
  );
};

export default App;
