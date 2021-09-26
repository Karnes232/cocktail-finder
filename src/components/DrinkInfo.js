import React from 'react'

const DrinkInfo = ({drink}) => {
    let ingredients = []
    let measurements = []

    for (let i = 1; i < 16; i++) {
        let ingredient = drink[`strIngredient${i}`]
        let measurement = drink[`strMeasure${i}`]
        if (ingredient !== null && ingredient !== '') {
        ingredients.push(ingredient)
        measurements.push(measurement)
        }
    }

    if (drink.strDrink === undefined) {
        return (
            <div className="cocktail-info">
                <h4 className='cocktail-info__name'>
                    No Drink Found
                </h4>
            </div>
        )
    }
    
    return (

        <div className="cocktail-info">
          <h4 className='cocktail-info__name'>
            {drink.strDrink}
          </h4>
          <div className="cocktail-info__photo-container">
            <img src={drink.strDrinkThumb} alt="" />
          </div>
          <div className="cocktail-info__ingredients">
            <ul className='cocktail-info__measurement'>
              {measurements.map(item => (
                <li>
                  {item}
                </li>
              ))}
            </ul>
            
            <ul className='cocktail-info__ingredient'>
              {ingredients.map(item => (
                <li>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
    )
}

export default DrinkInfo
