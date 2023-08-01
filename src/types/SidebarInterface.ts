export interface SidebarInterface {
  href: string;
  icon: string;
  label: string;
  badge?: string;
  selected?: boolean;
  sidebarExpanded?: boolean;
  disabled?: boolean;
  onItemClick?: () => void;
}
