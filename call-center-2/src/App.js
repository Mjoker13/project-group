import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchBar from "./components/SearchBar";
import { SubscriberList } from "./components/SubscriberList";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SearchBar />}>
        <Route path="Home" element={<HomePage />} />
        <Route path="sub" element={<SubscriberList />} />
      </Route>
    </Routes>
  );
};
export default App;
