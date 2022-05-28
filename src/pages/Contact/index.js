// My imports
import FacebookIcon from '../../assets/svg/icon-facebook.svg';
import InstagramIcon from '../../assets/svg/icon-instagram.svg';
import YouTubeIcon from '../../assets/svg/icon-youtube.svg';
import TwitterIcon from '../../assets/svg/icon-twitter.svg';

const Contact = () => {
  return (
    <section className="container">
      <div className="row">
        <div className="grid-6">
          <h3>Entre em contato</h3>
          <p>Aqui vpcê vai conseguir mais informações sobre o projeto Blog utilizando React.js</p>

          <form>
            <input type="text" name="name" className="mt-2" placeholder="Nome"></input>
            <input type="text" name="email" className="mt-2" placeholder="E-mail"></input>
            <textarea name="contet" rows="8" className="mt-2" placeholder="Insira aqui sua mensagem..."></textarea>

            <button className="btn mt-2">Enviar</button>
          </form>
        </div>
        <div className="grid-1 dissapear"></div>
        <div className="grid-5">
          <h5 className="mt-4">Algumas informações</h5>

          <h6 className="color-primary mt-4">Info.</h6>
          <p>Projeto Blog. em React.js do curso FrontPUSH.</p>

          <h6 className="color-primary mt-4">Address</h6>
          <p>Brasília, DF</p>

          <h6 className="color-primary mt-4">E-mail</h6>
          <p>ivanfilho22@icloud.com</p>

          <h6 className="color-primary mt-4">Redes Sociais</h6>
          <div className="mt-2">
            <img src={FacebookIcon} className="icon-s" />
            <img src={InstagramIcon} className="icon-s ml-2" />
            <img src={YouTubeIcon} className="icon-s ml-2" />
            <img src={TwitterIcon} className="icon-s ml-2" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
