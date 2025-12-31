import {ComplianceStatus} from "../interfaces";

export const COMPLIANCE_STATUS_CONFIG: Record<ComplianceStatus, string> = {
  'OK': 'thumbs-up-outline',
  'SURVEILLANCE': 'warning-outline',
  "NON CONFORME": 'thumbs-down-outline',
}
