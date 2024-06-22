import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../redux/articleSlice';

const categories = ['Business', 'Entertainment', 'General', 'Health', 'Science', 'Sports', 'Technology'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
  };

  return (
    <div className="flex flex-wrap justify-center gap-2 sm:justify-center sm:gap-4 my-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${currentCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'} 
                      hover:bg-blue-500 hover:text-white transition-colors duration-300`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
