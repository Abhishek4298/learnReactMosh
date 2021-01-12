import React, { Component } from 'react';
import Counter from "./Counter.jsx";
class Counters extends Component {
    state = {
        counters: [
            { id: 1, value: 4 },
            { id: 2, value: 0 },
            { id: 3, value: 0 },
            { id: 4, value: 0 },
        ]
    }
    render() {
        return (
            <>
                {this.state.counters.map((elem) => {
                    return <Counter key={elem.id} value={elem.value} selected={true} />
                })}
            </>);
    }
}

export default Counters;