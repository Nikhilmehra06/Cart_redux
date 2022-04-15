import React from 'react';

const Pagination = ({ pages, page, onChange }) => {
  console.log('pages', pages);
  const pageNumber = [];
  for (let i = 1; i <= pages; i++) {
    pageNumber.push(
      <button
        className={`btn btn-md rounded-circle ${
          page === i ? 'btn-dark' : 'btn-outline-dark'
        } m-1`}
        key={i}
        onClick={() => onChange(i)}
      >
        {i}
      </button>
    );
  }

  return <>{pageNumber}</>;
};

export default Pagination;
