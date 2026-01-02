import {
  calendarOutline,
  checkmarkCircleOutline,
  helpCircleOutline, hourglassOutline,
  speedometerOutline,
  thumbsDownOutline,
  thumbsUpOutline,
  warningOutline
} from "ionicons/icons";

export type AppIconKey =
  | 'thumbs-down-outline'
  | 'thumbs-up-outline'
  | 'warning-outline'
  | 'help-circle-outline'
  | 'speedometerOutline'
  | 'checkmark-circle-outline'
  | 'hourglass-outline'
  | 'calendarOutline'

export const REGISTRY_ICONS: Record<AppIconKey, string> = {
  'thumbs-down-outline': thumbsDownOutline,
  'thumbs-up-outline': thumbsUpOutline,
  'warning-outline': warningOutline,
  'help-circle-outline': helpCircleOutline,
  'speedometerOutline': speedometerOutline,
  'checkmark-circle-outline': checkmarkCircleOutline,
  'hourglass-outline': hourglassOutline,
  'calendarOutline': calendarOutline,
}
