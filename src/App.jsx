import { BrowserRouter, Routes, Route } from "react-router-dom";

//pages
import Home from "./pages/Home/Home.jsx";
import About from "./pages/About/About.jsx";
import Projects from "./pages/Projects/Projects.jsx";

//components
import Container from "./components/Container/Container.jsx";
import Nav from "./components/Nav/Nav.jsx";


function App() {
  return (
    <>
      <BrowserRouter>
        <Container>
        <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
          </Routes>
        </Container>
      </BrowserRouter>
    </>
  );
}

export default App;
