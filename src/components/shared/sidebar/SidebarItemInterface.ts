export interface SidebarItemInterface {
  title: string;
  path: string;
  icon?: JSX.Element;
  onClick?: () => void;
}
