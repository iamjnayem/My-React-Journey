import React from 'react'

function MySection(props) {
  return (
    <section style={{border: '1px solid blue', padding: '5px'}}>
        <h2>Awesome Section</h2>
        {props.children}
    </section>
  )
}

export default MySection