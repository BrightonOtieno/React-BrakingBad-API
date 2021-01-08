import React from 'react'
import CharacterItem from './CharcterItem';
import Search from '../ui/Search';
import Spinner from '../ui/Spinner';
const  CharacterGrid = ({items,isLoading}) => {
    // if isLoading is true we spin else we loop through ang pass data into component that handles display of cards
    return isLoading ? ( <Spinner/>   )
    : (
    
            <section className='cards'>
                {items.map((item)=>(
                    // pass through component that handles display of individual card 
                    <CharacterItem key={item.char_id} item={item}></CharacterItem>
                ))
                    
            }
            </section> 
    )
}

export default CharacterGrid;
