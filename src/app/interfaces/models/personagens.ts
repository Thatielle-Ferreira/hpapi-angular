export interface CharactersData {
  id             : number;
  name           : string;
  actor          : string;
  gender         : Gender;
  ancestry       : Ancestry;
  house          : House;
  species        : string;
  wizard         : boolean;
  patronus       : Patronus;
  wand           : Wand;
  hogwartsStaff  : boolean;
  hogwartsStudent: boolean;
}

export enum Ancestry {
  Empty        = "",
  HalfBlood    = "half-blood",
  HalfVeela    = "half-veela",
  Muggle       = "muggle",
  Muggleborn   = "muggleborn",
  PureBlood    = "pure-blood",
  QuarterVeela = "quarter-veela",
  Squib        = "squib"
}

export enum Gender {
  Empty  = "",
  Female = "female",
  Male   = "male"
}

export enum House {
  Empty      = "",
  Gryffindor = "Gryffindor",
  Hufflepuff = "Hufflepuff",
  Ravenclaw  = "Ravenclaw",
  Slytherin  = "Slytherin",
}

export enum Patronus {
  Boar               = "boar",
  Doe                = "doe",
  Empty              = "",
  Goat               = "goat",
  Hare               = "hare",
  Horse              = "horse",
  JackRussellTerrier = "Jack Russell terrier",
  Lynx               = "lynx",
  NonCorporeal       = "Non-Corporeal",
  Otter              = "otter",
  PersianCat         = "persian cat",
  Phoenix            = "Phoenix",
  Stag               = "stag",
  Swan               = "swan",
  TabbyCat           = "tabby cat",
  Weasel             = "weasel",
  Wolf               = "wolf",
}

export interface Wand {
  wood  : string;
  core  : Core;
  length: number | null;
}

export enum Core {
  DragonHeartstring  = "dragon heartstring",
  Empty              = "",
  PhoenixFeather     = "phoenix feather",
  PhoenixTailFeather = "phoenix tail feather",
  UnicornHair        = "unicorn hair",
  UnicornTailHair    = "unicorn tail hair",
}