export interface Color {
  id: string;
  color: string;
  style: string;
}

export interface Challenge {
  id: string;
  name: string;
  auteur: string;
  img: string;
  text: string;
  link: string;
}

export interface Job {
  id: string;
  namejob: string;
  text: string;
  branch: string;
  img: string;
}

export interface Aspiration {
  image: string;
  imgcat: string;
}

export interface DefiTerrain {
  name: string;
  img: string;
}

export interface Map {
  name: string;
  text: string;
  img: string;
}

export interface PrefTue {
  id: string;
  name: string;
  img: string;
}

export interface Trait {
  name: string;
  image: string;
}

export interface TraitTerrain {
  name: string;
  img: string;
}
