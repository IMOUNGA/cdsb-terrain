import {
  arrowBackOutline,
  calendarOutline,
  checkmarkCircleOutline,
  helpCircleOutline, hourglassOutline,
  speedometerOutline,
  thumbsUpOutline, timeOutline,
  warningOutline
} from "ionicons/icons";

export type AppIconKey =
  | 'timeOutline'
  | 'thumbs-up-outline'
  | 'warning-outline'
  | 'help-circle-outline'
  | 'speedometerOutline'
  | 'checkmark-circle-outline'
  | 'hourglass-outline'
  | 'calendarOutline'
  | 'arrow-back-outline'

export const REGISTRY_ICONS: Record<AppIconKey, string> = {
  'timeOutline': timeOutline,
  'thumbs-up-outline': thumbsUpOutline,
  'warning-outline': warningOutline,
  'help-circle-outline': helpCircleOutline,
  'speedometerOutline': speedometerOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'hourglass-outline': hourglassOutline,
  'calendarOutline': calendarOutline,
  'arrow-back-outline': arrowBackOutline,
}
