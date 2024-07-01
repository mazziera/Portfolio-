//images
import imgPerfil from "../../images/foto-perfil.png";

//CSS file
import styles from "./Home.module.css";

//components
import Button from "../../components/Button/Button";

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

        <Button></Button>
      </section>
    </>
  );
};

export default Home;
