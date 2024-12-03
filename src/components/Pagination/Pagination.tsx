import { getNumbers } from '../../utils';

type PaginationProps = {
  total: number;
  perPage: number;
  currentPage: number;
  onPageChange: (newPage: number) => void;
};

export const Pagination: React.FC<PaginationProps> = ({
  total,
  perPage,
  currentPage,
  onPageChange,
}) => {
  const HandleChangePage = (newPage: number) => {
    if (newPage !== currentPage) {
      onPageChange(newPage);
    }
  };

  const arrayOfPages = getNumbers(1, Math.ceil(total / perPage)).map(n => n);

  return (
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? 'disabled' : ''}`}>
        <a
          data-cy="prevLink"
          className="page-link"
          href="#prev"
          aria-disabled={currentPage === 1}
          onClick={() => HandleChangePage(currentPage - 1)}
        >
          «
        </a>
      </li>
      {arrayOfPages.map(item => (
        <li
          key={item}
          className={`page-item ${item === currentPage ? 'active' : ''}`}
          onClick={() => HandleChangePage(item)}
        >
          <a data-cy="pageLink" className="page-link" href={`#${item}`}>
            {item}
          </a>
        </li>
      ))}

      <li
        className={`page-item ${
          currentPage === Math.ceil(total / perPage) ? 'disabled' : ''
        }`}
      >
        <a
          data-cy="nextLink"
          className="page-link"
          href="#next"
          aria-disabled={currentPage === Math.ceil(total / perPage)}
          onClick={() => HandleChangePage(currentPage + 1)}
        >
          »
        </a>
      </li>
    </ul>
  );
};
