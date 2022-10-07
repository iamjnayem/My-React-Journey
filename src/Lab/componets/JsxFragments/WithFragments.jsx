import React, { Fragment } from 'react'

function WithFragments() {
  return (
    <Fragment>
        <h1>With Fragments</h1>
        <p>Doen't have any unused dom elements</p>
    </Fragment>
  )
}

export default WithFragments