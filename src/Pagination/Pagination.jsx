import ReactPaginate from 'react-paginate';
import { useDispatch } from "react-redux";
// import { useSelector } from "react-redux";
import { handlePageClick } from "../redux/slices/collectionClise";

import './pagination.scss';

const Pagination = () => {

  // const countPage = useSelector((state) => state.collection.countPage);

  const dispatch = useDispatch();

  return (
    <ReactPaginate
      className='pagination'
      breakLabel="..."
      nextLabel=">"
      onPageChange={(e) => dispatch(handlePageClick(e.selected + 1))}
      pageRangeDisplayed={5}
      pageCount={3}
      previousLabel="<"
      // forcePage={countPage - 1}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
