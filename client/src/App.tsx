import { useState } from "react";
import "./App.css";
import Menu from "./views/Menu";

function App() {
  const [page, setPage] = useState("home");

  return (
    <>
      {page === "home" && (
        <>
          <div className="flex items-center h-full w-full justify-center gap-15">
            <div className="bg-amber-500 p-8 w-[40%] h-[60%] justify-center items-center flex rounded-lg text-xl text-white font-semibold hover:bg-amber-700 cursor-pointer transition-all duration-300">
              Bartender
            </div>
            <div
              onClick={() => {
                setPage("menu");
              }}
              className="bg-purple-400 p-8 w-[40%] h-[60%] justify-center items-center flex rounded-lg text-xl font-semibold text-white hover:bg-purple-700 cursor-pointer transition-all duration-300">
              Customer
            </div>
          </div>
        </>
      )}
      {page === "menu" && (
        <>
          <div className="flex items-center h-full w-full justify-center gap-2">
            <Menu />
          </div>
        </>
      )}
    </>
  );
}

export default App;
