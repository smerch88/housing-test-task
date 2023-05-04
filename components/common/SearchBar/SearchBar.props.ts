export interface SearchBarProps {
  value: string;
  icon?: 'geotag' | 'envelope';
  onChange: (newValue: string) => void;
  placeholder?: string;
  className?: string;
  buttonText?: string;
  arrow?: boolean;
}
