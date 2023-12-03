//import { Pagination, usePagination } from 'react-instantsearch';
import { Pagination } from 'flowbite-reat';
import { useState } from 'react';



export default function SRPagination() {
  const [currentPage, setCurrentPage] = useState(1);
  const onPageChange = (page: number) => setCurrentPage(page);

  return (
    <div className="flex overflow-x-auto sm:justify-center">
      <Pagination currentPage={currentPage} totalPages={100} onPageChange={onPageChange} />
    </div>
  );
}
  // const { pages, refine } = usePagination({ padding: 4 });
  // return (
      // <div>
        {/* <a
            href="#"
            className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <i class="fa-solid fa-chevron-left"></i>
          </a>
          <a
            href="#"
            className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          >
            <i class="fa-solid fa-angle-right"></i>
          </a> */}
        {/* <ul>
          {pages.map((page) => (
            <li key={page}>
              <span
                href="#"
                onClick={(event) => {
                  event.preventDefault();
                  refine(page);
                }}
              >
                {page + 1}
              </span>
            </li>
          ))}
        </ul> */}
      //   <Pagination
      //     currentPage={1}
      //     onPageChange={2}
      //     totalPages={100}
      //   />
      // </div>
  //)
