import React from 'react';

const Sort = ({handleSortSelection}) => {
  return (
    <div>
      <select onChange={handleSortSelection}>
        <option value="title">title</option>
        <option value="section">section</option>
      </select>
    </div>
  )
}

export default Sort
