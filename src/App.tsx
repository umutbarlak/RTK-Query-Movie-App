import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Favorites from "./pages/Favorites";
import Detail from "./pages/Detail";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <div className="min-h-screen bg-[#101827] text-black p-5 lg:p-10">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Detail />} />
          <Route path="/favorites" element={<Favorites />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
