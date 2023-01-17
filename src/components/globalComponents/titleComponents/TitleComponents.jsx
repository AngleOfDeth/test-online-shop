import React from 'react'
import "./titleComponents.css"

const TitleComponents = ( {titleText} ) => {
  return (
    <div>
      <h2 className='title'> {titleText} </h2>
    </div>
  )
}

export default TitleComponents