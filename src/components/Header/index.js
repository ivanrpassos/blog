import logo from '../../assets/svg/blog-logo.svg';

import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      {/* HEADER */}
      <header className="py-1 px-2">
        <nav>
          <div className="logo">
            <Link to="/">
              <img src={logo} alt="" />
            </Link>
          </div>
          <ul className="menu">
            <li>
              <Link to="/about" className="p-1">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="p-1">
                Contato
              </Link>
            </li>
          </ul>
        </nav>
        <div className="bx"></div>
        <div className="flex-start-row">
          <div className="search">
            <input type="text" name="search" id="" placeholder="Buscar..." />
          </div>
          <div className="cta-desktop ml-3">
            <Link to="/login" className="btn">
              Login
            </Link>
          </div>
          <div className="cta-mobile mr-1">
            <Link to="/login" className="link">
              Login
            </Link>
          </div>
        </div>
      </header>

      {/* MENU MOBILE */}
      <div className="relative">
        <div className="menu-mobile">
          <ul className="nav-mobile">
            <li>
              <Link to="/about" className="link-menu-mobile">
                Sobre
              </Link>
            </li>
            <li>
              <Link to="/contact" className="link-menu-mobile">
                Contato
              </Link>
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
