import logo from '../../assets/svg/blog-logo.svg';

const Header = () => {
  return (
    <>
      {/* HEADER */}
      <header className="py-1 px-2">
        <nav>
          <div className="logo">
            <a>
              <img src={logo} alt="" />
            </a>
          </div>
          <ul className="menu">
            <li>
              <a className="p-1">Categorias</a>
            </li>
            <li>
              <a className="p-1">Sobre</a>
            </li>
            <li>
              <a className="p-1">Contato</a>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
            <input type="text" name="search" id="" placeholder="Buscar..." />
          </div>
          <div className="cta-desktop ml-3">
            <a className="btn">Login</a>
          </div>
          <div className="cta-mobile mr-1">
            <a className="link">Login</a>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <a className="link-menu-mobile">Categorias</a>
            </li>
            <li>
              <a className="link-menu-mobile">Sobre</a>
            </li>
            <li>
              <a className="link-menu-mobile">Contato</a>
            </li>
            <li className="py-2 pl-2">
              <input type="text" name="search" id="" placeholder="Buscar..." />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Header;
