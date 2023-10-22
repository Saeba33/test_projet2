const Header = () => {
  return (
      <header>
        <div className="coolitude">
          <p>
            Phrases motivantes défilantes - Phrases motivantes défilantes -
            Phrases motivantes défilantes - Phrases motivantes défilantes{" "}
          </p>
        </div>
        <nav className="navbar">
          <ul className="links">
            <li><a href="home">Home</a></li>
            <li><a href="infos">Infos</a></li>
            <li><a href="contact">Contact</a></li>
            <li><a href="login">Login</a></li>
          </ul>
          <div className="logo" alt="logo"></div>
        </nav>
        <div className="intro">
          <h1>Surf sur ton spot !</h1>
          <br/>
          <div className="subtitle">
            <h2> Sous-titre </h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              voluptatibus possimus placeat? Ullam, iusto neque! Illo maiores
              incidunt vitae provident.æ
            </p>
          </div>
          <br/>
          <div className="alert">
            <h3>Alerte</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Minus,
              alias!
            </p>
          </div>
        </div>
      </header>
  );
};

export default Header;
