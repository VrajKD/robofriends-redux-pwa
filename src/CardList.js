import React from 'react';
import Card from './Card';
// import { robots } from './robots';

class CardList extends React.Component {
    render() {
        console.log('CardList');
        const robots = this.props.robots;
        const cardArr = robots.map((robot, i) => {
            return <Card key={robots[i].id} id={robots[i].id} name={robots[i].name} email={robots[i].email} />
        })
        return (<div>
            {cardArr}
        </div>);
    }
}

export default CardList;
