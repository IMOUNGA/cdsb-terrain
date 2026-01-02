import {ComplianceStatus} from "../interfaces";

export const COMPLIANCE_STATUS_CONFIG: Record<ComplianceStatus, {
  label: string,
  color: string,
}> = {
  compliant: {label:'CONFORME', color: '#2fb53a',},
  underReview: {label:'SURVEILLANCE', color: '#fa7e42'},
  nonCompliant: {label:'NON CONFOME', color: '#f10101'},
}
