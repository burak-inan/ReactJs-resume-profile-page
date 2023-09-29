import "./mobile-menu.css";

const MobileMenu = ({toggleNav}) => {

  return (
    <div className="mobile-bar visible-sm visible-xs">
      <div className="hamburger-menu" onClick={toggleNav}>
        <div className="bar"></div>
      </div>
    </div>
  );
};

export default MobileMenu;
