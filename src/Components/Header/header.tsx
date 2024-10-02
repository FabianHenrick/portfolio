export function Header() {
  return (
    <header>
      <div className="interface">
        <div className="logo">
          <a href="">
            <img
              src="https://placehold.co/200x130/png"
              alt="Logo Fabian Henrick"
            />
          </a>
          <nav className="menu-desktop">
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
            <div className="btn-contato">
              <a href="#">
                <button>Contato</button>
              </a>
            </div>
          </nav>
        </div>
        {/* <!--logo--> */}
      </div>
      {/* <!--interface--> */}
    </header>
  );
}
