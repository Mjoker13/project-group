import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import { Admin } from "./pages/Admin";
import { useState, useEffect } from "react";
import { getLayoutApi } from "./Api";

const App = () => {
  const [layout, setLayout] = useState([
    {
      chiave: "navbar",
      valore: "bg-dark",
    },
  ]);

  useEffect(() => {
    console.log("useEffect ", { layout });
  }, []);

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
