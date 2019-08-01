import React from 'react';

class Card extends React.Component {
    render() {
        const { name, email } = this.props;
        return (
            <div className="dib pa3 bg-washed-blue ma3 br4 grow bw2 shadow-5 tc">
                <img src={`https://robohash.org/${name}?200x200&set=set1`} alt='robot' />
                <div>
                    <h2>{name}</h2>
                    <p> {email}</p>
                </div>
            </div>
        );
    }
}

export default Card