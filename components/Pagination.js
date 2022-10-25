import React, { useEffect, useState } from 'react';
import { List } from './styles';

const Pagination = ({
    totalPages,
    handleOnPageChange,
    activePage = 1,
    paginationPagesPerSide = 2,
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
      let prevPages = currentPage - paginationPagesPerSide;
      let nextPages = currentPage + paginationPagesPerSide;
      if (prevPages <= 0) prevPages = 1;
      if (nextPages > totalPages) nextPages = totalPages;
      return { nextPages, prevPages };
    };
  
    const nextPage = () => currentPage < totalPages && setCurrentPage(currentPage + 1);
    const prevPage = () => currentPage > 1 && setCurrentPage(currentPage - 1);
  
    const currentNumbers = getPaginationNumbers();
  
    return (
        <List.Container>
          <List.Navigate onClick={prevPage} hide={currentPage === 1}>&lsaquo;</List.Navigate>
          {currentNumbers.map((number) => (
            <List.Item key={number} onClick={() => setCurrentPage(number)} active={number === currentPage}>{number}</List.Item>
          ))}
          {totalPages !== currentPage && (
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