import React from 'react';
import CardList from './CardList';
import Search from './Search';
import { robots } from './robots';
import Scrolling from "./Scrolling";
import './App.css'

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            searchText: '',
            robots: robots,
        }
        this.onSearchChange = this.onSearchChange.bind(this);
    }

    onSearchChange(event) {
        console.log(event.target.value);
        const rob = robots;
        const text = event.target.value.toLowerCase();
        const filterBots = rob.filter((robot) => {
            return robot.name.toLowerCase().indexOf(text) !== -1;
        }
        )
        console.log(filterBots);

        this.setState({
            searchText: event.target.value,
            robots: filterBots,
        });
    }

    render() {
        return (
            <div className="tc">
                <div className="shadow-5">
                    <h1 className="f1">RoboFriend Finder</h1>
                    <Search searchChange={this.onSearchChange} />
                </div>
                <Scrolling>
                    <CardList robots={this.state.robots} />
                </Scrolling>
            </div>
        )
    }
}

export default App;