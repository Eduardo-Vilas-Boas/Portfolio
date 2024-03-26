import { useState, useEffect, Suspense } from "react";
import Preloader from "./components/Pre";
import Navbar from "./components/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Footer from "./components/Footer";
import Resume from "./pages/Resume/ResumeNew";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
  useParams,
  useNavigate,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import i18n from "./i18n";

interface LanguageHandlerProps {
  language?: string;
  updateLoad: (value: boolean) => void;
}

const LanguageHandler: React.FC<LanguageHandlerProps> = ({
  language,
  updateLoad,
}) => {
  const { lang } = useParams();

  useEffect(() => {
    // Set the language based on the URL
    if (language !== undefined && language != i18n.language) {
      i18n.changeLanguage(language);
    }

    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, [lang]);

  return (
    <Routes>
      <Route path="/" element={<Home />} key={lang} />
      <Route path="/about" element={<About />} key={lang} />
      <Route path="/resume" element={<Resume />} key={lang} />
      <Route path="*" element={<Navigate to="/" />} key={lang} />
    </Routes>
  );
};

function App() {
  const [load, updateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  function RedirectToPath() {
    const navigate = useNavigate();
    const { "*": path } = useParams();

    useEffect(() => {
      navigate(`/${path}`, { replace: true });
    }, [navigate, path]);

    return null;
  }

  return (
    <Router basename="/">
      <Suspense fallback={<Preloader load={load} />}>
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/en/*" element={<RedirectToPath />} />
            <Route
              path="/fr/*"
              element={
                <LanguageHandler language={"fr"} updateLoad={updateLoad} />
              }
            />
            <Route
              path="/pt/*"
              element={
                <LanguageHandler language={"pt"} updateLoad={updateLoad} />
              }
            />
            <Route
              path="*"
              element={
                <LanguageHandler language={"en"} updateLoad={updateLoad} />
              }
            />
          </Routes>
          <Footer />
        </div>
      </Suspense>
    </Router>
  );
}

export default App;
