import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Auth from "./pages/auth/Auth";
import Home from "./pages/home/Home";
import Quiz from "./pages/quiz/Quiz";
import Finish from "./pages/finish/Finish";

const App = () => {
  return (
    <div className="p-5 md:px-[60px] md:py-10">
      <Header />
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/home" element={<Home />} />
        <Route path="/:id" element={<Quiz />} />
        <Route path="/finish" element={<Finish />} />
      </Routes>
    </div>
  );
};

export default App;
