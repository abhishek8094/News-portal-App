import { useDispatch, useSelector } from 'react-redux';
import {setCategory, setPage} from "../redux/articleSlice";

const categories = ["Business","Entertainment", "General", "Health", "Science", "Sports", "Technology"]

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state)=>state.articles.category);

  const handleCategory = (category) =>{
    dispatch(setCategory(category));
    dispatch(setPage(1));
  }
  return (
    <div>
      {
        categories.map((category) => {
          <button key={category}
          onClick={handleCategory(category)}>
            {category}
          </button>
        })
      }
    </div>
  )
}

export default CategoryFilter
