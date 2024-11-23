import { Routes, Route, Navigate } from "react-router-dom"

import Home from "./components/home/Home.jsx";

import TestingTools from "./components/domains/testingtools/TestingTools.jsx";
// import FullStackJava from "./components/domains/java/FullStackJava.jsx";
// import FullStackPython from "./components/domains/python/FullStackPython.jsx";
// import MERNFullStack from "./components/domains/mernstack/MERNFullStack.jsx";
// import DataScience from "./components/domains/datascience/DataScience.jsx";

import CreateQuestions from "./components/domains/testingtools/CreateQuestions.jsx";


function App() {
  return (
    <>
      {/* <Home /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/testing" element={<TestingTools />} />
        <Route path="/testing/create" element={<CreateQuestions />} />
      </Routes>
    </>
  )
}

export default App;