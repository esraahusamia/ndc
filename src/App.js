import {
  Route, Routes
} from "react-router-dom";
// Components
import TopBar from "./Components1/TopBar";
import NavBar from "./Components1/NavBar"
import Home from "./Components1/Home";
import Contact from "./Components1/Contact";
import Volunteer from "./Components1/Volunteer";
// Style 
import "./App.css"
function App() {
  return (
    <div>
      <TopBar />
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
