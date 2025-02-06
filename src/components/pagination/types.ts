import type { MetaInfo } from '@/shared/api/types';

export interface PaginationProps {
  currentPage: number;
  meta: MetaInfo;
  onPageChange: (page: number) => void;
}
