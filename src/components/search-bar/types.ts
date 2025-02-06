export interface SearchBarProps {
  searchName: string;
  onSearch: (term: string) => void;
}

export interface SearchBarState {
  input: string;
}
