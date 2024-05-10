import { useEffect } from "react";
import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Main from "./pages/Main";
import Board from "./pages/Board";
import Developers from "./pages/Developers";
import Developers1 from "./pages/Developers1";
import MainLogIn from "./pages/MainLogIn";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/board":
        title = "";
        metaDescription = "";
        break;
      case "/developers":
        title = "";
        metaDescription = "";
        break;
      case "/developers1":
        title = "";
        metaDescription = "";
        break;
      case "/main-log-in":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/board" element={<Board />} />
      <Route path="/developers" element={<Developers />} />
      <Route path="/developers1" element={<Developers1 />} />
      <Route path="/main-log-in" element={<MainLogIn />} />
    </Routes>
  );
}
export default App;
