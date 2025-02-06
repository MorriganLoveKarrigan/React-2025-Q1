import { Component } from 'react';
import { buildPageNumbers } from '@/utils/buildPageNumbers.ts';
import { PaginationProps } from '@/components/pagination/types.ts';

class Pagination extends Component<PaginationProps> {
  render() {
    const { currentPage, meta, onPageChange } = this.props;
    const { next, prev, pages } = meta;

    return (
      <div className="flex justify-center items-center gap-2 mt-4">
        {prev && (
          <button
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={() => onPageChange(currentPage - 1)}
          >
            &lt;
          </button>
        )}
        {buildPageNumbers(pages, currentPage).map((page, index) =>
          typeof page === 'number' ? (
            <button
              key={index}
              className={`px-3 py-1 rounded-md ${
                currentPage === page
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-200 text-gray-800 hover:bg-gray-300'
              }`}
              onClick={() => onPageChange(page)}
            >
              {page}
            </button>
          ) : (
            <span key={index} className="px-3 py-1 text-gray-500">
              {page}
            </span>
          )
        )}
        {next && (
          <button
            className="px-3 py-1 bg-gray-300 text-gray-800 rounded-md hover:bg-gray-400"
            onClick={() => onPageChange(currentPage + 1)}
          >
            &gt;
          </button>
        )}
      </div>
    );
  }
}

export default Pagination;
