export interface ApiResponse<T> {
  info: MetaInfo;
  results: T[];
}

export interface MetaInfo {
  count: number;
  pages: number;
  next: string | null;
  prev: string | null;
}
