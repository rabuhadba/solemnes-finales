import { NavItem } from './nav-item/nav-item';

export const navItems: NavItem[] = [
  {
    navCap: 'Home',
  },
  {
    displayName: 'Dashboard',
    iconName: 'layout-dashboard',
    route: '/dashboard',
  },
  {
    displayName: 'Prospecto',
    iconName: 'message',
    route: '/greeting',
  },
  {
    displayName: 'Fidelización',
    iconName: 'message',
    route: '/fidelizaciongt',
  },
  {
    displayName: 'Fidelización/Prospecto',
    iconName: 'message',
    route: '/fidelizacionprospectogt',
  },
];
