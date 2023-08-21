import type { minFishData } from "config/types";

export const fishes: minFishData[] = [
  {
    key: "pufferfish",
    name: "pufferfish",
    season: ["summer"],
    location: ["ocean"],
    image: null,
    type: "common",
    weather: "sun",
  },
  {
    key: "pufferfish-1",
    name: "pufferfish 1",
    season: ["spring"],
    location: ["ocean", "ginger island oceans"],
    image: null,
    type: "common",
    weather: "rain",
  },
  {
    key: "pufferfish-2",
    name: "pufferfish 2",
    season: ["fall"],
    location: ["ocean", "ginger island oceans", "forest"],
    image: null,
    type: "common",
    weather: "sun",
  },
  {
    key: "pufferfish-3",
    name: "pufferfish 3",
    season: ["winter"],
    location: ["ginger island oceans", "forest"],
    image: null,
    type: "legendary",
    weather: "sun",
  },
];
