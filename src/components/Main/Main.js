import "./Main.css";
import { Routes, Route } from "react-router-dom";

import PatternButton from "../PatternButton/PatternButton";
import RandomPattern from "../RandomPattern/RandomPattern";
import About from "../About/About";

function Main() {
  return (
    <main>
      <Routes>
        <Route exact path="/" element={<PatternButton />} />
        <Route path="/randompattern" element={<RandomPattern />} />
      </Routes>

      <About />
    </main>
  );
}

export default Main;
