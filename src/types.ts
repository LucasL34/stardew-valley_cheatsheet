export interface Fish {
  id: string;
  name: string; // TODO language?
  description: string;
  icon: string; // drive code
  location: (CompleteFishData | string)[];
  time: string[];
  season: (Season | RawSeason)[];
  weather: Weather[];
  type: FishType;
  fishingLevel?: number;
  price:
    | number
    | {
        min: number;
        max: number;
      }; // TODO use min as default price and set max as min*2
}

export type AllOfCategory = "all" | "any";
export type Weather = "sun" | "rain" | "wind" | AllOfCategory;
export type FishType = "common" | "night-market" | "legendary"; // TODO pot fish
// * Season
export type RawSeason = "summer" | "winter" | "fall" | "spring" | AllOfCategory;
export type Season = CompleteFishData<RawSeason>;

export interface CompleteFishData<Data = string> {
  name: Data | Data[];
  extra?: string; // TODO replace for detail
  detail?: string;
}
