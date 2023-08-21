import type { minFishData } from "config/types";

import c from "_components/cards/card.module.css";

function card(props: minFishData) {
  const { season, name, location } = props;

  const ICON_MOCK = new Array(4).fill("");

  return (
    <>
      <div className={c.basicCard}>
        <div className={c.header}>
          <figure className={c.icon}></figure>
        </div>

        <div className={c.tags}>
          {season.map((cat) => {
            return <span>{cat}</span>;
          })}
        </div>

        <h3 className={c.name}>{name}</h3>

        <div className={c.iconsList}>
          {ICON_MOCK.map((v) => {
            return <figure></figure>;
          })}
        </div>

        <div className={c.locContainer}>
          {location.map((loc, i) => {
            return (
              <span className={c.location}>
                {loc}
                {i !== location.length - 1 ? ", " : ""}
              </span>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default card;
