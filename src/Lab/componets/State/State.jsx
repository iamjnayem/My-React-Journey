import React, { Component } from 'react'

export class State extends Component {
    state = {
        heading: 'React Awesomesauce (Busy)',
        content: 'Loading...'
    }

    componentDidMount(){
       setTimeout(() => {
        this.setState({
            heading: 'React Awesomesauce',
            content: 'Data!'
        })
       }, 2000);
    }
    render() {
        const {heading, content} = this.state;
        return (
            <main>
                <h1>{heading}</h1>
                <p>{content}</p>
            </main>
        )
    }
}

export default State