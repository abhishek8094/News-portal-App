import { useDispatch, useSelector } from 'react-redux'
import { setPage } from '../redux/articleSlice';

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.articles.page);
  const articlesPerPage = useSelector((state) => state.articles.articlesPerPage);
  const totalArticles = useSelector((state) => state.articles.articles.length);

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= Math.ceil(totalArticles / articlesPerPage)) {
      dispatch(setPage(newPage));
    }
  }
  return (
    <div className="flex justify-center space-x-2 my-4">
      <button className="px-4 py-2 rounded bg-gray-300" onClick={() => handlePageChange(page-1)} >
      previous
      </button  >
      <span className="px-4 py-2">{page}</span>
      <button className="px-4 py-2 rounded bg-gray-300" onClick={() => handlePageChange(page + 1)} disabled={page >= Math.ceil(totalArticles / articlesPerPage)}>
        Next
      </button>
    </div>
  )
}

export default Pagination;
