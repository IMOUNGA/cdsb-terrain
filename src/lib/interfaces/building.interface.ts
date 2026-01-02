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

export type TypeOfProperty = 'warehouse' | 'office' | 'residential' | 'mixedUse';
export type EnergyRating = 'A' | 'B' | 'C' | 'D' | 'E' | 'F' | 'G' | '?';
export type ComplianceStatus = 'compliant' | 'underReview' | 'nonCompliant';
export type Occupancy = 'occupied' | 'vacant';
export type BuildingActionType = 'audit' | 'works' | 'inspection' | 'assignmentPending';
export type BuildingActionStatus = 'done' | 'inProgress' | 'planned';
