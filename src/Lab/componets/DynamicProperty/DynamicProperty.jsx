import React, { useEffect, useState } from 'react'

function DynamicProperty() {

    const [enabled, setEnabled] = useState(false);
    const placeholder = 'input value...';
    const size = 50;
    const aText = 'A button';

    const changeButtonStatus  = (e) => {
        console.log('logging....');
    }
    return (
        <section className='custom-border'>
            <p>hover the button to active or deactive...</p>
            <div onMouseOver={changeButtonStatus} style={{border: '1px solid orange', paddingLeft: '5px', 'paddingRight': '5px'}}>
                <button disabled={!enabled} >{aText}</button>
            </div>
            <input type="text" placeholder={placeholder} size={size} />
        </section>

  )
}

export default DynamicProperty