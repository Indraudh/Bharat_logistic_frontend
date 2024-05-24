import React from 'react'
import Topbar from './Topbar'
function Defaultlayout(props) {
  return (
    <div className="layout">
    <Topbar/>
    <div className="content">
        {props.children }
    </div>
    </div>
  )
}

export default Defaultlayout