import { memo, useCallback, useRef, useState } from "react";
import "./Pagination.css"

type PaginationProps = {
  totalItems: number
  pageSize?: number
  onCurrentPageChange: (currentPage: number) => void
};

enum ButtonType {
  First = 'First',
  Previous = 'Previous',
  Next = 'Next',
  Last = 'Last',
}

const Pagination: React.FC<PaginationProps> = (props: PaginationProps) => {
  const pageSize = props.pageSize ?? 10
  const totalPages = Math.ceil(props.totalItems / pageSize)
  const [currentPage, setCurrentPage] = useState(1)
  const previousTotalPages = useRef(0)
  const onCurrentPageChange = props.onCurrentPageChange

  const onChangePagination = useCallback((buttonType: ButtonType) => {
    let updateCurrentPage = 1;
    switch (buttonType) {
      case ButtonType.Last:
        updateCurrentPage = totalPages
        break
      case ButtonType.Next:
        updateCurrentPage = currentPage + 1
        break
      case ButtonType.Previous:
        updateCurrentPage = currentPage - 1
        break
      default:
        updateCurrentPage = 1
        break
    }
    setCurrentPage(updateCurrentPage)
    onCurrentPageChange(updateCurrentPage)
  }, [currentPage, totalPages, setCurrentPage, onCurrentPageChange])

  if (currentPage !== 1 && totalPages !== previousTotalPages.current) {
    setCurrentPage(1)
  }
  previousTotalPages.current = totalPages

  return <div className="pagination">
    <button disabled={currentPage === 1} onClick={() => onChangePagination(ButtonType.First)}>First</button>
    <button disabled={currentPage === 1} onClick={() => onChangePagination(ButtonType.Previous)}>Previous</button>
    <span>{`${currentPage} of ${totalPages}`}</span>
    <button disabled={currentPage === totalPages} onClick={() => onChangePagination(ButtonType.Next)}>Next</button>
    <button disabled={currentPage === totalPages} onClick={() => onChangePagination(ButtonType.Last)}>Last</button>
  </div>;
};

export default memo(Pagination);