import logo from "./assets/chefLogo.png";
function Header() {
  return (
    <>
      <header>
        <img className="logo-img" src={logo} alt="logo.png" />
        <h1 className="title">Chef Claude</h1>
      </header>
    </>
  );
}

export default Header;
