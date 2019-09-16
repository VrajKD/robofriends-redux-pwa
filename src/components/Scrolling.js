import React from 'react';

class Scrolling extends React.Component {
    render() {
        return (
            <div style={{ overflowY: 'scroll', height: '600px' }}>
                {this.props.children}
            </div>
        )
    }
}

export default Scrolling;