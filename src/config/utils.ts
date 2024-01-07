import type { RawSeason, CompleteFishData } from "types";

export function parseCompleteData(rawData: string | CompleteFishData) {
  if (typeof rawData === "string") {
    return {
      name: rawData,
    };
  }

  return rawData;
}

export function setIcon(id: string): string {
  return `${process.env.IMAGE_URL}${id}`;
}

export function getIdSeasonIcon(season: RawSeason): string {
  // TODO add empty icon
  const seasons = {
    spring: "14b0wUH4yROjnQ4hLWyqKm1aFVam3TTAa",
    fall: "1eVxobbq6slIkx8sg5V2RWsuVfdYeLL64",
    winter: "1qop86JjcN59ckkdg4c0mpu7S3Zsih64K",
    summer: "1U2J0YYqtGEDzDCnRi0bfStu6F8X4Qe5Y",
    rain: "1MiXIrFtYy-HcFA1HP5P2qHVPOmB9WRVV",
  };

  return setIcon(seasons[season]);
}
