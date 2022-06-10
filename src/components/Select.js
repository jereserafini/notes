import React from 'react'

const Select = ({notes, handleSelect}) => {

  return (
    <select name="select" className='mt-4' onChange={handleSelect}>
        <option value={''}>Category filter</option>
        {notes.map( e =>
            (e.category !== '') && <option key={e.category} value={e.category}>{e.category}</option>
        )}
    </select>
  )
}

export default Select

