import {EnergyRating, TypeOfProperty} from "../interfaces";

export const PROPERTY_USAGES_CONFIG: Record<TypeOfProperty, {label: string}> = {
  warehouse: {label: 'Entrepôt'},
  office: {label: 'Bureau'},
  residential: {label: 'Logement'},
  mixedUse: {label: 'Mixte'},
}

export const ENERGY_RATING_CONFIG: Record<
  EnergyRating,
  {
    label: string;
    color: string;
    textColor: string;
  }
> = {
  A: {label: 'A', color: '#2ecc71', textColor: '#fff'},
  B: {label: 'B', color: '#7bed9f', textColor: '#fff'},
  C: {label: 'C', color: '#f1c40f', textColor: '#fff'},
  D: {label: 'D', color: '#e67e22', textColor: '#fff'},
  E: {label: 'E', color: '#e74c3c', textColor: '#fff'},
  F: {label: 'F', color: '#c0392b', textColor: '#fff'},
  G: {label: 'G', color: '#ff0000', textColor: '#fff'},
  '?': {label: '?', color: '#fff', textColor: '#000'},
};
