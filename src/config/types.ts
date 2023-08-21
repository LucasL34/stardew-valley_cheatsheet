export type Seasons = "summer" | "fall" | "spring" | "winter";
export type FishTypes = "common" | "rare" | "special" | "legendary";
export type BasicWeather = "rain" | "sun" | "";

// * nav
export interface NavElement {
  // TODO type React element
  icon: any;
  wording: string;
  value: string;
  url: string;
  active?: boolean;
  disable?: boolean;
  styles?: string;
}

// * cards
export interface minFishData {
  key: string;
  name: string;
  tags?: string[];
  season: Seasons[];
  location: string[];
  image: string | null;
  type: FishTypes;
  // TODO define weather
  weather: string;
}
