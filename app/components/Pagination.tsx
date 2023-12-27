import Link from 'next/link';
import React from 'react';

const Pagination = ({
  currentPage,
  totalPage,
  getData,
}: {
  currentPage: number;
  totalPage: number;
  getData: () => void;
}) => {
  return (
    <div className='sp text-center'>
      <div className='flex justify-center gap-10'>
        <Link
          onClick={() => getData()}
          href={
            currentPage === 1
              ? ''
              : `/admin/manage/beauty-packages?page=${currentPage - 1}`
          }
        >
          Previous page
        </Link>
        {[...Array(totalPage)].map((_ele, ind) => (
          <Link
            href={`/admin/manage/beauty-packages?page=${ind + 1}`}
            key={ind}
          >
            <button className=''>{ind + 1}</button>
          </Link>
        ))}
        <Link
          onClick={() => getData()}
          href={
            currentPage === totalPage
              ? ''
              : `/admin/manage/beauty-packages?page=${currentPage + 1}`
          }
        >
          Next page
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
