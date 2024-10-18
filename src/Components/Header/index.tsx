import { NavLink } from "react-router-dom";
import { ButtonContact, HeaderComp, HeaderContent, NavBar } from "./styles";

export function Header() {
  return (
    <HeaderComp>
      <HeaderContent>
        <a href="">
          <img src="https://placehold.co/90x60/png" alt="Logo Fabian Henrick" />
        </a>
        <NavBar>
          <ul>
            <li>
              <NavLink to="/" title="Home">
                <a href="#">Início</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/expertise" title="Especialidades">
                <a href="#">Especialidades</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/about" title="Sobre">
                <a href="#">Sobre</a>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" title="Projetos">
                <a href="#">Projetos</a>
              </NavLink>
            </li>
          </ul>
        </NavBar>
        <div className="btn-contato">
          <a href="#">
            <ButtonContact>Contato</ButtonContact>
          </a>
        </div>
        {/* <!--logo--> */}
      </HeaderContent>
      {/* <!--interface--> */}
    </HeaderComp>
  );
}
