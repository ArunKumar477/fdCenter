import React from 'react'
import { CFooter } from '@coreui/react'

const TheFooter = () => {
  return (
    <CFooter fixed={false}>
      <div>
        <span className="ml-1"> FD English &copy; 2021.</span>
      </div>
      <div className="mfs-auto">
        <span className="mr-1">Powered by</span>
        <a href="https://www.vttech.in/" target="_blank" rel="noopener noreferrer">Web-Imaginer Technology</a>
      </div>
    </CFooter>
  )
}
export default TheFooter
