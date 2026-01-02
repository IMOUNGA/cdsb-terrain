import {Occupancy} from "../interfaces";

export const OCCUPANCY_STATUS_CONFIG : Record<Occupancy, {
  label: string;
  color: string;
  textColor: string;
}> = {
  'occupied' : {label: 'Occupé', color: '#ff0000', textColor: '#fff'},
  'vacant' : {label: 'Vacant', color: '#2ebc47', textColor: '#fff'}
}
