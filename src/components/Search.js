import React, { useState } from 'react'
import { getRandomCocktail, getSearchCocktail } from './getCocktail'

const Search = ({sendDataToParent}) => {
  const [input, setInput] = useState('')

  const handleRandomCocktail = async (e) => {
    e.preventDefault()
    let drink = await getRandomCocktail()
    sendDataToParent(drink)
  }

  const handleSearchCocktail = async (e) => {
    e.preventDefault()
    let drink = await getSearchCocktail(input)
    sendDataToParent(drink)
  }

    return (
        <div className="search">
          <form action="" className='form'>
            <div class="form__group">
              <input 
                name='drink' 
                type="text" 
                class="form__input" 
                placeholder="Search Drink" 
                id="drink" 
                required
                value={input} 
                onInput={e => setInput(e.target.value)}
              />
            </div>
            <div className="buttons">
              <button className='form__buttons' onClick={handleSearchCocktail}>Search</button>
              <button className='form__buttons' onClick={handleRandomCocktail}>Random</button>
            </div>
            
          </form>
        </div>
    )
}

export default Search
