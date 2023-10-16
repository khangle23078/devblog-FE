export interface menuItem {
  label: string;
  path: string;
  key: string;
  icon?: React.ReactNode;
  children?: menuItem[];
}
