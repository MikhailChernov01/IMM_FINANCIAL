import React from 'react'
import { useParams } from 'react-router-dom'

function Account() {
  const {id} =useParams()
  return (<>
    Account {id}
  </>)
}

export default Account

