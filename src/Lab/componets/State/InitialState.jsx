import React, { Component } from 'react'

export class InitialState extends Component {
    state = {
        first: false,
        second: true
    };

    render() {
        const {first, second} = this.state;
        return (
            <main className='custom-border'>
                <section>
                    <button disabled={first}>First</button>
                </section>
                <section>
                    <button disabled={second}>Second</button>
                </section>
            </main>
        )
    }
}

export default InitialState