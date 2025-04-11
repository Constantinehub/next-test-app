import { ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { MenuItemType } from '@/types';
import { OverridableComponent } from '@mui/material/OverridableComponent';
import { SvgIconTypeMap } from '@mui/material';

type ItemProps = Omit<MenuItemType, 'href'>;

interface MenuItemProps {
  item: ItemProps;
  onClick: () => void;
  isActive: boolean;
}

function MenuItem(props: MenuItemProps) {
  const {
    item: { label, icon, disabled },
    onClick,
    isActive,
  } = props;

  const Icon = icon as OverridableComponent<SvgIconTypeMap>;

  return (
    <ListItemButton
      sx={{ px: 3, color: 'black' }}
      disabled={disabled}
      selected={isActive}
      onClick={onClick}
    >
      {Icon && (
        <ListItemIcon sx={{ minWidth: 45 }}>
          <Icon />
        </ListItemIcon>
      )}
      <ListItemText primary={label} />
    </ListItemButton>
  );
}

export default MenuItem;
