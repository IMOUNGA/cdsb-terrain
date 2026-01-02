import {BuildingActionStatus} from "../interfaces";
import {AppIconKey} from "./registry-icons";

export const ACTION_STATUS_CONFIG: Record<BuildingActionStatus, {
  label: string;
  backgroundColor: string;
  textColor: string;
  icon: AppIconKey;
}> = {
  'TERMINÉ' : {label: 'TERMINÉ', backgroundColor: '#16a34a', textColor: '#fff', icon: 'checkmark-circle-outline'},
  'EN COURS' : {label: 'EN COURS', backgroundColor: '#facc15', textColor: '#fff', icon: 'hourglass-outline'},
  'PLANIFIÉ' : {label: 'PLANIFIÉ', backgroundColor: '#2563eb', textColor: '#fff', icon: 'calendarOutline'},
}
