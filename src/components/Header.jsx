import { Link } from 'react-router-dom';

function Header() {
  return (
    <nav className="green darken-1">
      <div className="nav-wrapper">
        <Link to="/" className="brand-logo">
          Рецепты Блюд
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
        </ul>
      </div>
    </nav>
  );
}

export { Header };
