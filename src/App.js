import React from 'react';
import CardList from './CardList';
import Search from './Search';
// import { robots } from './robots';
import Scrolling from "./Scrolling";
import Header from './Header';
import './App.css'
// import AsyncComponent from './AsyncComponent';
import { connect } from 'react-redux'
import { setSearchField, fetchRobots } from './actions'

const mapStateToProps = state => {
    // console.log('mapStateToProps', state);
    return {
        searchField: state.searchRobots.searchField,
        robots: state.requestRobots.robots,
        isPending: state.requestRobots.isPending,
        error: state.requestRobots.error
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
        onRequestRobots: (event) => dispatch(fetchRobots())
    }
}

class App extends React.Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         robots: [],
    //     }
    // this.onSearchChange = this.onSearchChange.bind(this);
    // }

    componentDidMount() {
        this.props.onRequestRobots();
    }

    render() {
        // console.log(this.props);
        const { searchField, onSearchChange, robots, isPending } = this.props;
        const filterBots = robots.filter((robot) => {
            return robot.name.toLowerCase().indexOf(searchField.toLowerCase()) !== -1;
        }
        )

        return (
            <div className="tc">
                <div className="shadow-5">
                    <Header />
                    <Search searchChange={onSearchChange} />
                </div>
                <Scrolling>
                    {isPending ? <h1>Loading</h1> :
                        <CardList robots={filterBots} />
                    }
                </Scrolling>
            </div>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);