import React from 'react'
import MyButton from './MyButton';
import MySection from './MySection';


function NestedElements() {
  return (
    <MySection>
        <MyButton>My Button Text</MyButton>
    </MySection>
  )
}

export default NestedElements