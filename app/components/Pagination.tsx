import React from 'react';

const Pagination = () => {
  return (
    <div className='sp text-center'>
      <div className='flex justify-center gap-10'>
        <button>previos page</button>
        <button className='flex h-10 w-10 items-center justify-center rounded-full bg-blue p-3 text-lg text-white'>
          1
        </button>
        <button>next page</button>
      </div>
    </div>
  );
};

export default Pagination;
