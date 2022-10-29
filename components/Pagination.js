import React, { useEffect, useState } from 'react';
import { FIRST_PAGE, PAGES_PER_SIDE } from '../constants';
import { List } from './styles';

const Pagination = ({
    totalPages,
    handleOnPageChange,
    activePage = FIRST_PAGE,
    pagesPerSide = PAGES_PER_SIDE,
  }) => {
    const [currentPage, setCurrentPage] = useState(activePage)
  
    useEffect(() => {
      handleOnPageChange(currentPage)
    }, [currentPage])
  
    const getPaginationNumbers = () => {
      const { nextPages, prevPages } = getPagesPerSide();
      const numbers = [];
      for (let number = prevPages; number <= nextPages; number++) numbers.push(number);
      return numbers;
    };
  
    const getPagesPerSide = () => {
      let prevPages = currentPage - pagesPerSide;
      let nextPages = currentPage + pagesPerSide;
      if (prevPages <= 0) prevPages = FIRST_PAGE;
      if (nextPages > totalPages) nextPages = totalPages;
      return { nextPages, prevPages };
    };
  
    const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > FIRST_PAGE && setCurrentPage(currentPage - 1);
  
    const currentNumbers = getPaginationNumbers();
    const isInInicialRange = currentPage >= pagesPerSide * PAGES_PER_SIDE;
    const isInLastRange = totalPages !== currentPage;
  
    return (
        <List.Container>
          <List.Navigate onClick={prevPage} hide={currentPage === FIRST_PAGE}>&lsaquo;</List.Navigate>
          {isInInicialRange && (
            <>
              <List.Item onClick={() => setCurrentPage(FIRST_PAGE)}>{FIRST_PAGE}</List.Item>
              <List.Item>...</List.Item>
            </>
          )}
          {currentNumbers.map((number) => (
            <List.Item key={number} onClick={() => setCurrentPage(number)} active={number === currentPage}>{number}</List.Item>
          ))}
          {isInLastRange && (
            <>
              <List.Item>...</List.Item>
              <List.Item onClick={() => setCurrentPage(totalPages)}>{totalPages}</List.Item>
            </>
          )}
          <List.Navigate onClick={nextPage} hide={currentPage === totalPages}>&rsaquo;</List.Navigate>
        </List.Container>
    );
  };

  export default Pagination;