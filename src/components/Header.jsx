const Header = () => {
  return (
    <>
      <header>
        <div className="coolitude">
          <p>
            Phrases motivantes défilantes - Phrases motivantes défilantes -
            Phrases motivantes défilantes - Phrases motivantes défilantes{" "}
          </p>
        </div>
        <nav>
          <ul className="navbar">
            <li>
              <a href="home"></a>Home
            </li>
            <li>
              <a href="infos"></a>Infos et définitions
            </li>
            <li>
              <a href="contact"></a>Contact
            </li>
            <li>
              <a href="login"></a>Login
            </li>
          </ul>
          <div id="logo" alt="logo">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
              <path
                fill="#0099ff"
                opacity="2"
                d="M0,224L40,234.7C80,245,160,267,240,256C320,245,400,203,480,170.7C560,139,640,117,720,117.3C800,117,880,139,960,154.7C1040,171,1120,181,1200,181.3C1280,181,1360,171,1400,165.3L1440,160L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
              ></path>
            </svg>
          </div>
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
    </>
  );
};

export default Header;
