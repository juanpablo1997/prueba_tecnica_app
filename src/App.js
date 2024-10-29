import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/organisms/header/Header";
import Home from "./components/pages/Home";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
