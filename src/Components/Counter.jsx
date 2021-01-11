import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0,
        tag: ['tag1', 'tag2', 'tag3']

    }
    handleIncrement = ((product) => {
        console.log("======> :: product", product);
        this.setState({ count: this.state.count + 1 });
    })
    doHandleIncrement = () => {
        this.handleIncrement({ id: 1 })
    }
    render() {
        let classes = "btn m-2"
        classes += this.state.count === 0 ? ' btn-primary ' : ' btn-warning '
        return (
            <>
                <span className={classes}>{this.state.count}</span>
                <button onClick={() => this.handleIncrement({ id: 1 })} className="btn btn-dark"> Increment </button>
                <ul>
                    {this.state.tag.map((Elem, index) => {
                        return <li key={index}> {Elem} </li>
                    })}
                </ul>
            </>);
    }
}

export default Counter;