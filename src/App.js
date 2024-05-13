import {useEffect, useState} from "react";
import { Routes, Route, useNavigationType, useLocation } from "react-router-dom";
import Main from "./pages/Main";
import Board from "./pages/Board";
import Developers from "./pages/Developers";
import Developers1 from "./pages/Developers1";
import MainLogIn from "./pages/MainLogIn";
import Post from "./pages/Post";

const routeData = {
  "/": { title: "", metaDescription: "" },
  "/board": { title: "", metaDescription: "" },
  "/developers": { title: "", metaDescription: "" },
  "/developers1": { title: "", metaDescription: "" },
  "/main-log-in": { title: "", metaDescription: "" }
};

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;


  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action]);

  useEffect(() => {
    const { title, metaDescription } = routeData[pathname] || {};
    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector('head > meta[name="description"]');
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
        <Route path="/post" element={<Post />} />
      </Routes>
  );
}

export default App;