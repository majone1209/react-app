import logo from "./../assets/location.png";
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
            <nav className="header__nav__nav">
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
              <a className="header__nav__item" href="/varijable">
                Varijable
              </a>
              <a className="header__nav__item" href="/petlje">
                Petlje
              </a>
              <a className="header__nav__item" href="/vjezba2604">
                Vjezba2604
              </a>
              <a className="header__nav__item" href="/vjezba2804">
                Vjezba2804
              </a>
              <a className="header__nav__item" href="/vjezba0305">
                Vjezba0305
              </a>
              <a className="header__nav__item" href="/breweries">
                Breweries
              </a>
              <a className="header__nav__item" href="/pokemons">
                Pokemons
              </a>
              <a className="header__nav__item" href="/europe">
                Europe
              </a>
              <a className="header__nav__item" href="/africa">
                Africa
              </a>
              <a className="header__nav__item" href="/chatbox">
                Chatbox
              </a>
              <a className="header__nav__item" href="/vjezba1505">
                Vjezba 1505
              </a>
              <a className="header__nav__item" href="/todolist">
                To do list
              </a>
              <a className="header__nav__item" href="/povijestplesa">
                Povijest plesa
              </a>
              <a className="header__nav__item" href="/instagram">
                Instagram
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
