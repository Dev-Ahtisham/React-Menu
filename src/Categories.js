import React from 'react'

const Categories = ({filterCategory, uniqueCategories}) => {
  return (
    <div className='menu'>
        {uniqueCategories.map((category, index) => {
          return(
            <button key={index} onClick={() => filterCategory(category)}>
              {category}
            </button>
          );
        })}
    </div>
  )
}

export default Categories