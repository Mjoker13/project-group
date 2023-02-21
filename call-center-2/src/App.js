import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Admin from "./pages/Admin";
import SearchBar from "./components/SearchBar";
import { SubscriberList } from "./components/SubscriberList";
import { useEffect } from "react";
import { searchSub } from "./Api";

const App = () => {
  // const updateData = async (key) => {
  //   const responseData = await searchSub(key);
  //   console.log(responseData);
  // };

  // useEffect(() => {
  //   updateData();
  // }, []);

  return (
    <Routes>
      <Route path="" element={<HomePage />} />
      <Route path="/admin" element={<Admin />} />
    </Routes>
  );
};
export default App;
