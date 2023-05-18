import React from 'react'

const Container = (props) => {
  return (
    <div style={{width: '95%'}} className="mx-auto">
        {props.children}
    </div>
  )
}

export default Container