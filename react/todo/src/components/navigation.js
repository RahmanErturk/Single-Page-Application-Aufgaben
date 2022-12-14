import "./Navigation.scss";
import NavItem from "./NavItem";

// Ein Komponent fängt immer mit einer großen Buchstabe an.

function Navigation() {
  return (
    <nav className="Navigation">
      <ul className="Navigation__List">
        <NavItem navLabel="Link 1" navLink="https://google.de" />
        <NavItem navLabel="Link 2" navLink="https://google.de" />
        <NavItem navLabel="Link 3" navLink="https://google.de" />
      </ul>
    </nav>
  );
}

export default Navigation;
