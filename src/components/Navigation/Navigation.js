import "./Navigation.css";
// import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__list-item">
          <HashLink smooth to="/#About" className="navigation__link">
            About
          </HashLink>
        </li>
        <li className="navigation__list-item navigation__list-item_ravelry">
          <a
            href="https://www.ravelry.com/"
            className="navigation__link"
            target="_blank"
            rel="noreferrer"
          >
            Ravelry (External service)
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
