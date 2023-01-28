import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { LeftBar } from "./component/LeftBar";
import { Home } from "./pages/Home";
import { Search } from "./pages/Search";
import { Login } from "./component/Login";
import Signup from "./component/Signup";
import { CreatePlaylist } from "./pages/CreatePlaylist";
import { Navbar } from "./component/Navbar";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <LeftBar />
        <div className="header">
          <Navbar/>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Search" element={<Search />} />
            <Route path="/Playlist" element={<CreatePlaylist />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/Signup" element={<Signup />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
