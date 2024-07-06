//css
import styles from "./Navbar.module.css";

//libs react router
import { NavLink } from "react-router-dom";

//hooks
import { useState } from "react";

//images
import logo from "../../images/logo.webp";

//components
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";

const Navbar = () => {
  const [Mobile, setMobile] = useState(false);

  return (
    <nav className={styles.navbar}>
      <NavLink className={styles.brand} to="/">
        <section className={styles.logo}>
          <img src={logo} alt="logo" />
          <div>
            <p>Raphael Mazzieri</p>
            <span>Frontend Developer</span>
          </div>
        </section>
      </NavLink>

      <button
        role="menu mobile"
        aria-label="menu mobile"
        className={styles.mobile_icon}
        onClick={() => setMobile(!Mobile)}
      >
        {Mobile ? <ImCross className="icone-menu"/> : <FaBars className="icone-menu"/>}
      </button>

      <ul
        className={Mobile ? styles.nav_mobile : styles.nav_list}
        onClick={() => setMobile(false)}
      >
        <li>
          <NavLink to="/" end>
            Home
          </NavLink>
        </li>

        <li>
          <NavLink to="/" end>
            Sobre
          </NavLink>
        </li>

        <li>
          <NavLink to="/" end>
            Projetos
          </NavLink>
        </li>

        <li>
          <NavLink to="mailto:rquitto@gmail.com" target="_blank" end >
            Contato
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
