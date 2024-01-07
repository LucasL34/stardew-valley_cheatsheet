import { getIdSeasonIcon, setIcon, parseCompleteData } from "config/utils";

import type { Fish } from "types";

import c from "_components/cards/card.module.css";

function card(props: Fish) {
  const { season, name, location, icon, weather } = props;

  return (
    <>
      <div className={c.basicCard}>
        <div className={c.header}>
          <img className={c.icon} src={setIcon(icon)} alt={name} title={name} />
        </div>

        <div className={c.tags}>
          {weather.map((weather) => parseCompleteData(weather).name)}
        </div>

        <h2 className={c.name}>{name}</h2>

        <div className={c.season}>
          {season.map((cat) => {
            return (
              <img
                src={getIdSeasonIcon(parseCompleteData(cat).name)}
                alt={parseCompleteData(cat).name}
              />
            );
          })}
        </div>

        <div className={c.locContainer}>
          {location.map((loc, i) => {
            return (
              <span className={c.location}>
                {parseCompleteData(loc).name}
                {loc?.extra ? ` (${loc.extra})` : ""}
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
