import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Liked from "./pages/Liked";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/liked" element={<Liked />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
