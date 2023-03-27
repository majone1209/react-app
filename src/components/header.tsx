import logo from "./../assets/Apple-Logo.png";
const Header = () => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={logo} alt="Logo" />
      </div>
      <div className="header__actions">
        <div className="header__nav">
          <nav>
            <a className="header__nav__item" href="">
              Home
            </a>
            <a className="header__nav__item" href="">
              About
            </a>
          </nav>
        </div>
      </div>
      <div>
        <h1>MJ</h1>
      </div>
    </header>
  );
};

export default Header;
