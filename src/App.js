import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Footer from "./components/organisms/footer/Footer";

function App() {
  return (
    <Router>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/acerca-de" element={<About />} />
        </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
