import React from 'react'

const Select = ({categories = [1,2,3,4,5,6,7,8,9,10]}) => {
  return (
    <select name="select" className='mt-4' onChange={(e) => console.log(e.target.value)}>
            <option value={null}>Category filter</option>
        {categories.map( e => 
            <option key={e} value={e}>{e}</option>
        )}
    </select>
  )
}

export default Select