import { Pagination, usePagination } from 'react-instantsearch';

export default function SRPagination() {
  const { pages, refine } = usePagination({ padding: 4 });
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-6">
      <div className="flex flex-1 justify-between ">
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
        <Pagination
          currentPage={1}
          onPageChange={2}
          totalPages={100}
        />
      </div>
    </div>
  )
}