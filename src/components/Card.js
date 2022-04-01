import React, {useState} from 'react';
import './style.css';

const Card = () => {

    const [cardList, setCardList]  = useState( [
        {id:1,  text:'card 1'},
        {id:2,  text:'card 2'},
        {id:3,  text:'card 3'},
        {id:4,  text:'card 4'}
    ])

    const [currentCard, setCurrentCard] = useState ( null)


    const dragStart = (e, card) =>{
        setCurrentCard(card)
    }

    const dragEnd = (e, card) =>{
        e.target.style.background = 'rgb(29, 182, 172)'
    }

    const dragOver = (e, card) =>{
        e.preventDefault()
        e.target.style.background = 'lightgray'
    }

    const dragLeave = (e, card) =>{
        e.target.style.background = 'rgb(29, 182, 172)'
    }

    const dragDrop = (e, card) =>{
        e.preventDefault()
        setCardList(cardList.map(c=>{
            if(c.id === card.id){
                return {...c, id: currentCard.id}
            }
            if(c.id === currentCard.id){
                return {...c, id: card.id}
            }
            return c 
            
        }))
        e.target.style.background = 'rgb(29, 182, 172)'
    }

    const sortCard = (a,b) => a.id > b.id ? 1 : -1

    return (
        <div>
            <h1>card</h1>
            {cardList.sort(sortCard).map(card => 
                <div 
                onDragEnd={(e) => dragEnd(e)}
                onDragLeave={(e) => dragLeave(e)}
                onDragOver={(e) => dragOver(e)}
                onDragStart={(e) => dragStart(e, card)}
                onDrop={(e) => dragDrop(e, card)}
                draggable={true}
                className={'Card'} >
                    {card.text}
                </div>
            )}
        </div>
    );
};

export default Card;


