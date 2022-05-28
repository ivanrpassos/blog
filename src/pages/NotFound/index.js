import logo from '../../assets/svg/blog-logo2.svg';

import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <section className="container">
      <div className="row flex-center">
        <img src={logo} className="icon-l" />
      </div>

      <div className="row">
        <div className="grid-4 dissapear"></div>
        <div className="grid-4">
          <h1 className="h0 text-center color-primary">404</h1>
          <h5 className="text-center">Página não encontrada</h5>
          <p className="text-center mt-1">
            A página que você está procurando não existe ou foi removida. Clique para voltar para o site.
          </p>

          <Link to="/" className="btn w-100 mt-3">
            Voltar p/ home
          </Link>
        </div>
        <div className="grid-4 dissapear"></div>
      </div>
    </section>
  );
};

export default NotFound;
