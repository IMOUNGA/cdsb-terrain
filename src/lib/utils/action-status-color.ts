import {BuildingActionStatus, BuildingActionType} from "../interfaces";
import {AppIconKey} from "./registry-icons";

export const ACTION_TYPES_CONFIG: Record<BuildingActionType, string> = {
  audit: 'Audit',
  works: 'Travaux',
  inspection: 'Contrôle',
  assignmentPending: 'En cours d\'attribution',
}

export const ACTION_STATUS_CONFIG: Record<BuildingActionStatus, {
  label: string;
  backgroundColor: string;
  textColor: string;
  icon: AppIconKey;
}> = {
  'done' : {label: 'TERMINÉ', backgroundColor: '#16a34a', textColor: '#fff', icon: 'checkmark-circle-outline'},
  'inProgress' : {label: 'EN COURS', backgroundColor: '#facc15', textColor: '#fff', icon: 'hourglass-outline'},
  'planned' : {label: 'PLANIFIÉ', backgroundColor: '#2563eb', textColor: '#fff', icon: 'calendarOutline'},
}
