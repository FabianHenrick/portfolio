import { ButtonContact, HeaderComp, HeaderContent, NavBar } from "./styles";

export function Header() {
  return (
    <HeaderComp>
      <HeaderContent>
        <a href="">
          <img
            src="https://placehold.co/150x90/png"
            alt="Logo Fabian Henrick"
          />
        </a>
        <NavBar>
          <ul>
            <li>
              <a href="#">Início</a>
            </li>
            <li>
              <a href="#">Especialidades</a>
            </li>
            <li>
              <a href="#">Sobre</a>
            </li>
            <li>
              <a href="#">Projetos</a>
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
