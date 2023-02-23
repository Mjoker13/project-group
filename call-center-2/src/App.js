import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Admin } from "./pages/Admin";
import { useState, useEffect } from "react";

const App = () => {
  const [layout, setLayout] = useState([
    { key: "navbar", value: "bg-dark" },
    { key: "buttonCallPhone", value: "bg-primary" },
    { key: "buttonDelite", value: "bg-primary" },
  ]);

console.log("array di layout",{layout})

useEffect(()=>{
 console.log("useEffect ",{layout})
},[])

  return (
    <Routes>
      <Route path="" element={<HomePage layout={layout} />} />
      <Route
        path="/admin"
        element={<Admin layout={layout} setLayout={setLayout} />}
      />
    </Routes>
  );
};
export default App;
