import styles from "./Button.module.css";


import { Link } from "react-router-dom";

const Button = ({ text, url }) => {
  return (
    <>
     <Link to="mailto:rquitto@gmail.com" target="_blank">
      <button className={styles.btn}>
        {text}
      </button>
    </Link>
    </>
  );
};

export default Button;
