import "./NavItem.css";

function NavItem(props) {
  return (
    <li className="NavItem">
      <a className="NavItem__Link" href={props.navLink} title={props.navLabel}>
        {props.navLabel}
      </a>
    </li>
  );
}

// Wir können beipm props auch Destrukturing machen
// function NavItem({ navLink, navLabel }) {
//   return (
//     <li className="NavItem">
//       <a className="NavItem__Link" href={navLink} title={navLabel}>
//         {navLabel}
//       </a>
//     </li>
//   );
// }

export default NavItem;
