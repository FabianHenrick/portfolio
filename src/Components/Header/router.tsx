import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/home";
import { Expertise } from "../../Pages/expertise";
import { About } from "../../Pages/about";
import { Projects } from "../../Pages/projects";

export function Router() {
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/expertise" element={<Expertise />} />
    <Route path="/about" element={<About />} />
    <Route path="/projects" element={<Projects />} />
  </Routes>;
}
