import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import { useState } from "react";

function App() {
  const [category, setCategory] = useState('');
  const categoryHandler = (data) => {
    setCategory(data.target.value);
    console.log("from app",category)
  }
  return (
    <>
      <div className="relative z-10">
        <Navbar />
      </div>
      <div className="flex overflow-y-auto pt-20 bg-slate-400 dark:bg-slate-700 dark:text-white">
        <Sidebar categoryhandler={categoryHandler}/>
        <Content cat={category}></Content>
      </div>
    </>
  );
}

export default App;
