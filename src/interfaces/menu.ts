export interface menuItem {
  label: React.ReactNode;
  key: string;
  icon?: React.ReactNode;
  children?: menuItem[];
}
