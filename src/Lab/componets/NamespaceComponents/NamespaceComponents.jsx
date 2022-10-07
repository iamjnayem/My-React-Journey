import React from 'react'

const First = () => <p>First...</p>
const Second = () => <p>Second...</p>

function NamespaceComponents(props) {
  return (
    <section className='custom-border'>{props.children}</section>
  )
}

NamespaceComponents.First = First;
NamespaceComponents.Second = Second;


export default NamespaceComponents;
export {First, Second};