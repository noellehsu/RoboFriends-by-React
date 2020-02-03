import React from 'react';
import Card from './Card';

// div內層一定要用{}包住元件
const CardList = ({ robots }) => {
    return (
        <div> 
            {
                robots.map((user, i) => {
                    return (
                        <Card
                            key={i}
                            id={robots[i].id}
                            name={robots[i].name}
                            email={robots[i].email} />
                    );
                })
            }
        </div>

    );
}

export default CardList;

