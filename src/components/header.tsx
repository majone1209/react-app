import logo from "./../assets/Apple-Logo.png";
import hamburger from "./../assets/icon-hamburger.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="header__actions">
          <div className="header__nav">
            <nav>
              <a className="header__nav__item" href="/">
                Home
              </a>
              <a className="header__nav__item" href="/exe">
                Exercises
              </a>
              <a className="header__nav__item" href="/ispit">
                CSS ispit
              </a>
              <a className="header__nav__item" href="/mlinar">
                Mlinar
              </a>
            </nav>
          </div>
          <div>
            <h1>MJ</h1>
          </div>
        </div>
        <div className="header__hamburger">
          <img src={hamburger} alt="hamburger" />
        </div>
      </div>
    </header>
  );
};

export default Header;
