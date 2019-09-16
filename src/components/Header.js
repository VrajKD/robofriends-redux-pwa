import React from 'react';
import CounterBtn from './CounterBtn';
class Header extends React.Component {
    // shouldComponentUpdate() {
    //     return false;
    // }
    render() {
        console.log('Header');
        return (
            <div>
                <h1 className="f1">RoboFriend Finder</h1>
                <CounterBtn />
            </div>)
    }
}

export default Header;