import React from 'react';

class Search extends React.Component {
    render() {
        return (
            <div className="ma2">
                <input type="text" placeholder="Search here for robots" className="pa3 bw1 br3 b--black-40 bg-washed-blue mb3 tc" onChange={this.props.searchChange} />
            </div>
        );
    }
}

export default Search;