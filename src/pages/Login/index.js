import React from 'react';

import Logo from '../../assets/svg/blog-logo2.svg';

const Login = () => {
  return (
    <section className="container">
      <div className="row flex-center">
        <img className="icon-l" src={Logo} />
      </div>

      <div className="row">
        <div className="grid-4 dissapear"></div>
        <div className="grid-4 ">
          <h6 className="text-center">Olá, faça login para continuar.</h6>

          <input type="text" className="mt-2" name="user" id="user" placeholder="Usuário" />
          <input type="text" className="mt-2" name="password" id="password" placeholder="Senha" />

          <div className="card-danger p-2 my-1">
            <h6 className="h7 color-red">Mensagem de erro!</h6>
          </div>

          <div className="card-success p-2 my-1">
            <h6 className="h7 color-green">Mensagem de sucesso!</h6>
          </div>

          <div className="card-warning p-2 my-1">
            <h6 className="h7 color-yellow">Mensagem de aviso!</h6>
          </div>

          <div className="card-info p-2 my-1">
            <h6 className="h7 color-primary">Mensagem de info!</h6>
          </div>

          <button className="btn w-100 mt-2">Entrar</button>
        </div>
        <div className="grid-4 dissapear"></div>
      </div>
    </section>
  );
};

export default Login;
