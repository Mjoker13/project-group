import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";

const App = () => {
  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default App;
