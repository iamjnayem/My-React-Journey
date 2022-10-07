import React, { Component } from 'react'

export class MergeCompState extends Component {
    state = {
        first: 'loading...',
        second: 'loading...',
        third: 'loading...',
        fourth: 'loading...',
        doneMessage: 'finished!'
    }
    componentDidMount(){
        setTimeout(() => {
            this.setState({first: 'done!'})
        }, 1000);

        setTimeout(() => {
            this.setState({second: 'done!'})
        }, 2000);

        setTimeout(() => {
            this.setState({third: 'done!'})
        }, 3000);

        setTimeout(() => {
            this.setState(state => {
                return {
                    ...state,
                    fourth: state.doneMessage
                }
            })
        }, 4000);
    }
    render() {
        const {state} = this;

        return (
            <url>
                {Object.keys(state).filter((item) => {
                    return item != 'doneMessage'
                }).map((item) => <li key={item}><strong>{item}</strong>:{state[item]}</li>) }
            </url>
        )
    }
}

export default MergeCompState