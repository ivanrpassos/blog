const Profile = () => {
  return (
    <>
      <section className="container">
        <div className="row">
          <div className="grid-6">
            <div className="flex-start-row">
              <div className="profile-big">
                <img src="" className="profile-img" />
              </div>
              <div className="ml-2">
                <h3 className="color-white">Ivan Rogério</h3>
                <h6 className="color-gray">Author</h6>
              </div>
            </div>
            <p className="mt-3">Olá, bom dia! Seja bem-vindo ao blog. Compartilhe conhecimento.</p>
          </div>
          <div className="grid-6 flex-center">
            <a className="btn">Adicionar post</a>
            <a className="btn ml-4">Meus dados</a>
          </div>
        </div>
      </section>
      <section className="container">
        <h3>Adicionar novo post</h3>
        <p className="mt-2">Preencha os campos abaixo para adicionar um novo post</p>
        <div className="row p-0">
          <div className="grid-3 p-0">
            <h6 className="mb-1">Data</h6>
            <input type="date" name="data" id="data" />
          </div>

          <div className="grid-3 p-0">
            <h6 className="mb-1">Categoria</h6>
            <select name="" id="">
              <option value="TECNOLOGIA">Tecnologia</option>
              <option value="GAMES">Games</option>
              <option value="FOTOGRAFIA">Fotografia</option>
              <option value="CINEMA">Cinema</option>
            </select>
          </div>
          <div className="grid-6 p-0">
            <h6 className="mb-1">Título</h6>
            <input type="text" name="titulo" id="titulo" />
          </div>
        </div>

        <div className="row p-0">
          <div className="grid-8 p-0">
            <h6 className="mb-1">Resumo do post</h6>
            <input type="text" name="titulo" id="titulo" />
          </div>

          <div className="grid-4 p-0">
            <h6 className="mb-1">Duração da leitura</h6>
            <select name="" id="">
              <option value="5">5 min.</option>
              <option value="7">7 min.</option>
              <option value="10">10 min.</option>
              <option value="15">15 min.</option>
            </select>
          </div>
        </div>

        <div className="row p-0">
          <div className="grid-12 p-0">
            <h6 className="mb-1">Descrição</h6>
            <textarea name="description" id="description" rows="8"></textarea>
          </div>
        </div>

        <div className="flex-end-row mr-2 mt-2">
          <button className="btn">Adicionar</button>
        </div>
      </section>
    </>
  );
};

export default Profile;
