import { Link, NavLink } from "react-router-dom";

import styles from "./Nav.module.css";

//images
import logo from "../../images/logo.webp";

//components
import Button from "../Button/Button.jsx";

const Nav = () => {
  return (
    <nav>
      <section className={styles.logo}> 
        <img src={logo} alt="logo"  />
        <div>
            <p>Raphael Mazzieri</p>
            <span>Frontend Developer</span>
        </div>
      </section>

      <ul className={styles.menuItems}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">Sobre</NavLink>
        </li>

        <li>
          <NavLink to="/projects">Projetos</NavLink>
        </li>
      </ul>

      <div>
        <Button className={styles.btn} text="Contato"></Button>

        <button>
          <Link to="mailto:rquitto@gmail.com" target="_blank">
            Contato
          </Link>
        </button>
      </div>
    </nav>
  );
};

export default Nav;
