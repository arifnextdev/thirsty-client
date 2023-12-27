import Link from 'next/link';
import React from 'react';

const Pagination = ({
  currentPage,
  totalPage,
}: {
  currentPage: number;
  totalPage: number;
}) => {
  return (
    <div className='sp text-center'>
      <div className='flex justify-center gap-10'>
        <Link href={currentPage === 1 ? '' : `/?page=${currentPage - 1}`}>
          previos page
        </Link>
        {[...Array(totalPage)].map((_ele, ind) => (
          <button className='' key={ind}>
            {ind + 1}
          </button>
        ))}
        <button className='flex h-10 w-10 items-center justify-center rounded-full bg-blue p-3 text-lg text-white'>
          1
        </button>
        <Link
          href={currentPage === totalPage ? '' : `/?page=${currentPage + 1}`}
        >
          Next page
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
