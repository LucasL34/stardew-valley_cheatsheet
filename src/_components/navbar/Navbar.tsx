import { categories } from "mocks/navbar";

import type { NavElement } from "config/types";

import nb from "_components/navbar/navbar.module.css";

function Navbar() {
  return (
    <div className={nb.body}>
      <div className={nb.content}>
        {categories.map((categ) => {
          return (
            <div key={categ.value}>
              <NavbarItem {...categ} />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function NavbarItem(props: NavElement) {
  const { icon, wording, value, active, disable } = props;

  return (
    <button className={nb.navItem} type="button" disabled={disable}>
      {icon ? <figure></figure> : <></>}
      <p>{wording || value}</p>
    </button>
  );
}

export default Navbar;
