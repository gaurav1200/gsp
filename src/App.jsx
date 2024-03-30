import { BrowserRouter } from "react-router-dom";

import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import { useEffect } from "react";
import axios from "axios";

const visitEndpoint = "https://gsp-server.onrender.com";
const App = () => {
  useEffect(() => {
    if (sessionStorage.getItem("visit")) {
      console.log("visited");
    } else {
      const data = {
        webSiteName: "gsp",
        count: 1,
      };
      axios
        .post(`${visitEndpoint}/visit`, { data })
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sessionStorage.setItem("visit", true);
  }, []);

  return (
    <BrowserRouter>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-reapeat bg-center">
          <Navbar />
          <Hero />
        </div>
        <About />
        <Experience />
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
