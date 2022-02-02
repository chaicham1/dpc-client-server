import React from 'react'

import Error from '../Components/Common/Error'
import BasicPageTamplate from '../Components/Common/BasicPageTamplate'

function NotFoundPage() {
  return (
    <BasicPageTamplate home={true}>
      <Error message={`404 NOT FOUND`} />
    </BasicPageTamplate>
  )
}

export default NotFoundPage
