import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../redux/articleSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.articles.page);

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage));
  }
  return (
    <div>
      <button onClick={() => handlePageChange(page-1)} disabled = {page ===1}>
      previous
      </button>
      <span>{page}</span>
      <button onClick={() => handlePageChange(page + 1)}>
        Next
      </button>
    </div>
  )
}

export default Pagination
