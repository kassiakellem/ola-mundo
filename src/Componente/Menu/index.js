import { Link } from "react-router-dom";
import styles from "./Menu.module.css";
import { NavLink } from "react-router-dom";
import MenuLink from "./MenuLink";
export default function Menu() {
 
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to="/">
            Inicio
        </MenuLink>
        <MenuLink to="/sobremim">
            Sobre Mim
       </MenuLink>
      </nav>
    </header>
  );
}