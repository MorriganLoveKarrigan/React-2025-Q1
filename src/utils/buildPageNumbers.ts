export const buildPageNumbers = (pages: number, currentPage: number) => {
  const visiblePages = 5;
  const pageNumbers: (number | string)[] = [];

  if (pages <= visiblePages) {
    return Array.from({ length: pages }, (_, i) => i + 1);
  }

  if (currentPage > 3) pageNumbers.push(1, '...');

  const start = Math.max(1, currentPage - 1);
  const end = Math.min(pages, currentPage + 1);

  for (let i = start; i <= end; i++) {
    pageNumbers.push(i);
  }

  if (currentPage < pages - 2) pageNumbers.push('...', pages);

  return pageNumbers;
};
