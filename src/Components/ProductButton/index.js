import React from 'react'
import './index.css'
const AddProductButton = ({onAdd}) => {
  return (
    <div className='add-product-btn'>

    <button className='add-btn' onClick={onAdd}>Add product</button>
    </div>
  )
}

export default AddProductButton