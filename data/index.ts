import DashboardIcon from '@mui/icons-material/Dashboard';
import FeedIcon from '@mui/icons-material/Feed';
// import AccountCircleIcon from '@mui/icons-material/AccountCircle';
// import SettingsIcon from '@mui/icons-material/Settings';
// import LogoutIcon from '@mui/icons-material/Logout';

export const menu = [
  {
    label: 'Dashboard',
    href: '/',
    icon: DashboardIcon,
    disabled: false,
  },
  {
    label: 'News',
    href: '/news',
    icon: FeedIcon,
    disabled: false,
  },
  // {
  //   label: 'Account',
  //   href: '/account',
  //   icon: AccountCircleIcon,
  //   disabled: false,
  // },
  // {
  //   label: 'Settings',
  //   href: '/settings',
  //   icon: SettingsIcon,
  //   disabled: false,
  // },
  // {
  //   label: 'Log Out',
  //   href: '/logout',
  //   icon: LogoutIcon,
  //   disabled: true,
  // },
];
