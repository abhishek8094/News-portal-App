import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../redux/articleSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.articles.page);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  }
  return (
    <div className="flex justify-center space-x-2 my-4">
      <button className="px-4 py-2 bg-gray-200" onClick={() => handlePageChange(page-1)} disabled = {page ===1}>
      previous
      </button  >
      <span className="px-4 py-2">{page}</span>
      <button className="px-4 py-2 bg-gray-200" onClick={() => handlePageChange(page + 1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination;
