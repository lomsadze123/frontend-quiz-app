import { useEffect, useState } from "react";

const useDarkMode = () => {
  const [mode, setMode] = useState("light");
  const storage = localStorage.getItem("mode") ?? "light";

  const handleMode = () => {
    const updatedMode = mode === "light" ? "dark" : "light";
    localStorage.setItem("mode", updatedMode);
    setMode(updatedMode);
  };

  useEffect(() => {
    setMode(storage);
  }, []);

  return [mode, handleMode];
};

export default useDarkMode;
