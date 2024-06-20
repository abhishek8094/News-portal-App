import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

const Pagination = () => {
  const dispatch = useDispatch();
  const page = useSelector((state)=> state.articles.page)
  return (
    <div>
      <button onClick={() => handlePrevious(page-1)} disabled = {page ===1}>
      previous
      </button>
      <span>{page}</span>
      <button>
        Next
      </button>
    </div>
  )
}

export default Pagination
