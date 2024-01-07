import { getSectionFishes } from "queries/fishes";

// TODO add dynamic sections
export const LandingSections = [
  { id: "fishes", icon: null, title: "fishes", items: getSectionFishes() },
];

export function getSections() {
  return LandingSections;
}
