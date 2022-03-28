import React, {useState} from 'react';
import './style.css';

const Card = () => {

    const [cardList, setCardList]  = useState( [
        {id:1, text:'card 1'},
        {id:2, text:'card 2'},
        {id:3, text:'card 3'},
        {id:4, text:'card 4'}
    ])

    return (
        <div>
            <h1>card</h1>
            {cardList.map(card => 
                <div 
                onDragEnd={(e) => console.log(card.text)}
                onDragLeave={(e) => console.log(card.text)}
                onDragOver={(e) => console.log(card.text)}
                onDragStart={(e) => console.log(card.text)}
                draggable={true}
                className={'Card'} >
                    {card.text}
                </div>
            )}
        </div>
    );
};

export default Card;