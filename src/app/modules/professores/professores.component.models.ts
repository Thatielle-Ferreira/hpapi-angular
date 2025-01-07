export interface StaffData {
  id      : number;
  name    : string;
  gender  : Gender;
  species : Species;
  house   : House;
  wizard  : boolean;
  ancestry: Ancestry;
  patronus: Patronus;
  wand    : Wand;
}

export enum Ancestry {
  Empty      = "",
  HalfBlood  = "half-blood",
  Muggleborn = "muggleborn",
  PureBlood  = "pure-blood"
}

export enum Gender {
  Female = "female",
  Male   = "male"
}

export enum House {
  Empty      = "",
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw  = "Ravenclaw",
  Slytherin  = "Slytherin"
}

export enum Patronus {
  Boar               = "boar",
  Empty              = "",
  Hare               = "hare",
  Horse              = "horse",
  JackRussellTerrier = "Jack Russell terrier",
  NonCorporeal       = "Non-Corporeal",
  Otter              = "otter",
  Stag               = "stag",
  Swan               = "swan"
}

export enum Species {
  Human = "human"
}

export interface Wand {
  wood  : Wood;
  core  : Core;
  length: number | null;
}

export enum Core {
  DragonHeartstring  = "dragon heartstring",
  Empty              = "",
  PhoenixTailFeather = "phoenix tail feather",
  UnicornHair        = "unicorn hair",
  UnicornTailHair    = "unicorn tail hair"
}

export enum Wood {
  Ash      = "ash",
  Cherry   = "cherry",
  Empty    = "",
  Hawthorn = "hawthorn",
  Holly    = "holly",
  Vine     = "vine",
  Willow   = "willow",
  Yew      = "yew"
}
