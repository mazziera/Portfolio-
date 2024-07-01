//images
import imgPerfil from "../../images/foto-perfil.png";

//CSS file
import styles from "./Home.module.css";

//components
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <section className={styles.hero}>
        <div>
          <p> Olá, Seja Bem-Vindo(a)!</p>
          <h1>Sou o Raphael Mazzieri Quitto</h1>
        </div>

        <img
          src={imgPerfil}
          alt="foto de Raphael Mazzieri"
          className={styles.profileImg}
        />
        <button>
        <a href="../../curriculo/Raphael-Dev-Frontend.pdf" download target="_blank">
            Curriculo
          </a>
        </button>
      </section>
    </>
  );
};

export default Home;
