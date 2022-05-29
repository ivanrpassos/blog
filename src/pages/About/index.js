import Logo from '../../assets/svg/blog.svg';

const About = () => {
  return (
    <section className="container flex-center">
      <div className="row mt-9">
        <div className="grid-4">
          <h1 className="h0">
            blog<span>.</span>
          </h1>
          <p>
            O Blog é um projeto desenvolvido em React.js para o curso FrontPUSH. Clique abaixo para ter mais
            informações.
          </p>
          <a className="btn mt-2">Saber mais</a>
        </div>
        <div className="grid-1"></div>
        <div className="grid-6 flex-center">
          <img src={Logo} />
        </div>
        <div className="grid-1"></div>
      </div>
    </section>
  );
};

export default About;
