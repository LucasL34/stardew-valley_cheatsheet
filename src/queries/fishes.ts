import { maxFishesByCateg } from "config/";
import fishes from "../../public/fishes.json";

import type { Fish } from "types";

export function getAllFishes(): Fish[] {
  return fishes;
}

export function getSectionFishes(): Fish[] {
  let _fishes = [];

  for (let i = 0; i < maxFishesByCateg; i++) {
    _fishes.push(fishes[i]);
  }

  return _fishes;
}
