import { useState, useEffect, Suspense } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Resume from "./pages/Resume/ResumeNew";
import {
  HashRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import i18next from "i18next";

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    const currentLanguage = localStorage.getItem("lng");

    if (currentLanguage === null || currentLanguage === undefined) {
      i18next.changeLanguage("en");

      localStorage.setItem("lng", "en");
    } else if (currentLanguage !== i18next.language) {
      i18next.changeLanguage(currentLanguage);
    }

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router basename="/">
      <Suspense fallback={<Preloader load={load} />}>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
