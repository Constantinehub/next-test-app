import { SvgIconTypeMap } from '@mui/material';
import { OverridableComponent } from '@mui/material/OverridableComponent';

export type MenuItemType = {
  label: string;
  icon?: React.ReactNode | OverridableComponent<SvgIconTypeMap>;
  href?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export interface RequestResponse<T> {
  data?: T;
  status?: string;
}
