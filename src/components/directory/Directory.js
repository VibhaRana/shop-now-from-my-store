import React from 'react'
import CategoryItem from '../category-item/CategoryItem'
import './directory.styles.scss'


function Directory({categories}) {
  return (
    <div className="directory-container" style={{backgroundColor: 'yellow'}}>
    {categories.map((category) => (
     <CategoryItem 
       key={category.id} 
       category={category}/>
    ))}
  </div>
  )
}

export default Directory