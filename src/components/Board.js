import React, {useState} from 'react';
import './style.css';

const Board = () => {

    const [boards, setBoards] = useState([
        {id: 1, title: 'Backlog', cards: [{id: 1, title: 'task 1', }, {id: 4, title: 'task 4', }, {id: 7, title: 'task 7', }]},
        {id: 2, title: 'In progress', cards: [{id: 2, title: 'task 2', }, {id: 5, title: 'task 5', }, {id: 8, title: 'task 8', }]},
        {id: 3, title: 'Done', cards: [{id: 3, title: 'task 3', }, {id: 6, title: 'task 6', }, {id: 9, title: 'task 9', }]}
    ])

    const [currentBoard, setCurrentBoard] = useState ( null)
    const [currentCard, setCurrentCard] = useState ( null)

    const dragStart = (e, card, board) =>{
        setCurrentBoard(board)
        setCurrentCard(card)
        
        
    }

    const dragEnd = (e) =>{
    }

    const dragOver = (e ) =>{
        e.preventDefault()
    }

    const dragLeave = (e) =>{
        
    }

    const dragDrop = (e, card, board) =>{
        e.preventDefault()
        const currentIndex = currentBoard.cards.indexOf(currentCard)
        currentBoard.cards.splice(currentIndex, 1)

        const dropIndex = board.cards.indexOf(card)
        board.cards.splice(dropIndex +1, 0, currentCard)

        setBoards(boards.map(b=>{
            if(b.id === board.id){
                return board
            }
            if(b.id === currentBoard.id){
                return currentBoard
            }
            return b 
        }))
        

        e.target.style.background = 'rgb(29, 182, 172)'
        
        
    }





    return (
        <div >
            <h1>Board</h1>
            {boards.map(board=>
                <div 
                    className='Board'>
                    <div>{board.title}</div>
                    {board.cards.map(card=>
                        <div 
                        onDragEnd={(e) => dragEnd(e)}
                        onDragLeave={(e) => dragLeave(e)}
                        onDragOver={(e) => dragOver(e, card)}
                        onDragStart={(e) => dragStart(e, card, board)}
                        onDrop={(e) => dragDrop(e, card, board)}
                        draggable={true}
                        className='Card'>
                            {card.title}
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default Board;
