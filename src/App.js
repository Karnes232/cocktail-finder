import React, { useEffect, useState } from 'react';
import './sass/App.scss';
import Title from './components/Title'
import Search from './components/Search';
import DrinkInfo from './components/DrinkInfo';

function App() {
  const [drink, setDrink] = useState({})
  
  const getRandomCocktail = async () => {
      const res = await fetch(
        'https://www.thecocktaildb.com/api/json/v1/1/random.php',
      );
      const json = await res.json();
       setDrink(json.drinks[0])
  }

  const sendDataToParent = (index) => {
    setDrink(index);
  };

  useEffect(() => {
    getRandomCocktail()
  }, [])

  return (
    <div className="App">
      <div className="container">
        <Title />
        <Search sendDataToParent={sendDataToParent}/>
        <DrinkInfo drink={drink}/>    
      </div>  
    </div>
  );
}

export default App;
