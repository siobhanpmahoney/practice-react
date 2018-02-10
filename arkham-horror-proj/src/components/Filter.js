import React from 'react';

const Filter = ({handleFilterName, displayDeck, filterTypes, handleCheckBoxChange}) => {

  const typeOptions = filterTypes

  return(

    <div className="myDeckClear">
      <div className="nameFilter">
        <span className="informalTitle myDeckClear">Filter Cards By Name:</span>
      <div className="searchBox"><input type="text" onChange={handleFilterName} /></div>

<div className="filterByType myDeckClear" >
<span className="informalTitle myDeckClear">Filter Cards By Type:</span>
    <div className="filterByTypeOptions">
    <form>
    <ul>
      {typeOptions.map((type) => {
        return <li><label><input type="checkbox" value={type} label={type} onChange={handleCheckBoxChange} />{type}</label></li>
        })}
      </ul>
      </form>
    </div>
  </div>

</div>
    </div>
  )
}

export default Filter
