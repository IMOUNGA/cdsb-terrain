import {Occupancy} from "../interfaces";

export const OCCUPANCY_STATUS_CONFIG : Record<Occupancy, {
  label: string;
  color: string;
}> = {
  'OCCUPÉ' : {label: 'Occupé', color: '#2ebc47'},
  'VACANT' : {label: 'Vacant', color: '#ff0000'}
}
