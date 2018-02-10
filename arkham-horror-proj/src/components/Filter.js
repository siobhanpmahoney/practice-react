import React from 'react';

const Filter = ({handleFilterName, fullDeck, filterTypes, handleFilterTypeSelection}) => {

  const typeOptions = filterTypes()

  return(

    <div>
      <span className="filter">
      <input type="text" onChange={handleFilterName} />
        Type:
        <select onChange={handleFilterTypeSelection}>
          <option value="all">All</option>
          {typeOptions.map((type) => {
            return <option value={type}>{type}</option>
          })}
        </select>
        Class:
        <select>
        </select>
      </span>
    </div>
  )
}

export default Filter
