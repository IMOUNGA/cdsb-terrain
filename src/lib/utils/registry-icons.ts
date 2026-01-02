import {helpCircleOutline, thumbsDownOutline, thumbsUpOutline, warningOutline} from "ionicons/icons";

export type AppIconKey =
  | 'thumbs-down-outline'
  | 'thumbs-up-outline'
  | 'warning-outline'
  | 'help-circle-outline'

export const REGISTRY_ICONS: Record<AppIconKey, string> = {
  'thumbs-down-outline': thumbsDownOutline,
  'thumbs-up-outline': thumbsUpOutline,
  'warning-outline': warningOutline,
  'help-circle-outline': helpCircleOutline,
}
