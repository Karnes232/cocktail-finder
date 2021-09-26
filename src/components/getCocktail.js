export const getRandomCocktail = async () => {
    const res = await fetch(
      'https://www.thecocktaildb.com/api/json/v1/1/random.php',
    );
    const json = await res.json();
    let drink = json.drinks[0]
    return drink
}

export const getSearchCocktail = async (name) => {
  const res = await fetch(
    `https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`,
  );
  const json = await res.json();
  try {
    let drink = json.drinks[0]
    return drink
  } catch (error) {
    let drink = {}
    return drink
  }
  
}