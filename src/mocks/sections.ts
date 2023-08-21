import { fishes } from "./fishes";

import type { minFishData } from "config/types";

import type { Sections } from "mocks/sections";

export const LandingSections: Sections<minFishData>[] = [
  { id: "fishes", icon: null, title: "fishes", items: fishes },
];

export function getSections(): Sections[] {
  return LandingSections;
}
