import React, { Component } from 'react';

class Counter extends Component {
    state = {
        count: 0
    }
    render() {
        let classes = this.newMethod();

        return (
            <>
                <span className={classes}>{this.state.count}</span>
                <button className="btn btn-dark"> click </button>
            </>);
    }

    newMethod() {
        let classes = "";
        classes += this.state.count === 0 ? 'btn btn-primary' : 'btn btn-warning';
        return classes;
    }
}

export default Counter;