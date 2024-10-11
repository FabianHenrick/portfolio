import { Route, Routes } from "react-router-dom";
import { Home } from "../../Pages/home";
import { Expertise } from "../../Pages/expertise";
import { About } from "../../Pages/about";
import { Projects } from "../../Pages/projects";
import { DefaultLayout } from "../layout/defaultLayout";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/expertise" element={<Expertise />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
      </Route>
    </Routes>
  );
}
