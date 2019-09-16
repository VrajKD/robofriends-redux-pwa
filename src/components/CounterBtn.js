import React from 'react';

class CounterBtn extends React.PureComponent {
    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
    }

    // shouldComponentUpdate = (nextProps, nextState) => {
    //     console.log(nextProps, nextState);
    //     if (this.state.count !== nextState.count)
    //         return true;
    //     return false;
    // }


    updateCount = () => {
        this.setState(state => {
            return {
                count: this.state.count + 1
            }
        })
    }

    render() {
        console.log('CounterBtn');
        return (<button style={{ padding: '8px', background: 'honeydew', marginBottom: '10px' }} onClick={this.updateCount}>Count: {this.state.count}</button>);
    }
}

export default CounterBtn;
