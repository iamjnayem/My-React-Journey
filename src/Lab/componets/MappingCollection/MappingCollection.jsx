import React from 'react'

function MappingCollection() {
    const Numbers = ['First...', 'Second...', 'Third...'];
    const NumberObject = {
        First: 1,
        Second: 2,
        Third: 3
    };

    const listArray = [
        <li key="1">Hello World </li>,
        <li key="2">Apple Mahmud</li>,
        <li key="3">No Problem</li>
    ];

  return (
    <div className='custom-border'>
        <section>
            <h1>Test Section...</h1>
            <ul>
                {listArray}
            </ul>
        </section>
        <section>
            <h1>Array Mapping...</h1>
            <ul>
                {
                    Numbers.map(element => <li key={element}>{element}</li>)
                }
            </ul>
        </section>
        <section>
            <h1>Object Mapping...</h1>
            <ul>
                {Object.keys(NumberObject).map(item => <li key={item}><strong>{item}:</strong>{NumberObject[item]}</li>)}
            </ul>
        </section>
    </div>
  )
}

export default MappingCollection