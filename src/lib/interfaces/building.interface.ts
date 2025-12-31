export interface Property {
  id: number;
  name: string;
  city: string;
  address: string;
  surface: string;
  description: string;
  usage: TypeOfProperty
  energyRating: EnergyRating;
  complianceStatus: ComplianceStatus;
  occupancy: Occupancy;
  actions?: BuildingAction[];
  images?: string[];
}

export interface BuildingAction {
  date: string;
  type: BuildingActionType;
  status: BuildingActionStatus;
}

type TypeOfProperty = 'Entrepôt' | 'Bureau' | 'Logement' | 'Mixte';
export type EnergyRating = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | '?';
export type ComplianceStatus = 'OK' | 'SURVEILLANCE' | 'NON CONFORME';
export type Occupancy = 'OCCUPÉ' | 'VACANT';
type BuildingActionType = 'Audit' | 'Travaux' | 'Contrôle' | 'En cours d\'attribution';
export type BuildingActionStatus = 'TERMINÉ' | 'EN COURS' | 'PLANIFIÉ';
