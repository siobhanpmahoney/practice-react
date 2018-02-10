import React from 'react'
import ShowListItem from './ShowListItem'

const ShowList = ({showList, handleShowSelect}) => {
  return(
    <div>
      {showList.map((show) => {
        return <ShowListItem show={show} key={show.id}/>
      }
      )}
    </div>
  )
}

export default ShowList
