import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setCategory, setPage } from '../redux/articleSlice';

const categories = ['business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology'];

const CategoryFilter = () => {
  const dispatch = useDispatch();
  const currentCategory = useSelector((state) => state.articles.category);

  const handleCategoryChange = (category) => {
    dispatch(setCategory(category));
    dispatch(setPage(1));
  };

  return (
    <div className="flex justify-center space-x-4 my-4">
      {categories.map((category) => (
        <button
          key={category}
          className={`px-4 py-2 rounded ${currentCategory === category ? 'bg-blue-600 text-white' : 'bg-gray-200'}`}
          onClick={() => handleCategoryChange(category)}
        >
          {category}
        </button>
      ))}
    </div>
  );
};

export default CategoryFilter;
