import Header from './Header'
import { useEffect, useState } from 'react'
import Recipe from './Recipe'


function App() {
  const[recipes, setRecipes] = useState()

  useEffect(()=>{
    console.log('mounted')
    fetch("http://localhost:3001/recipes/1234")
    .then(response => response.json())
    .then(data =>{
      setRecipes(data)
      console.log(recipes)
    })
  }, [])
  
  const recipeComponents = recipes.map(R => {
    return(
      <Recipe recipe = {R} />
    )
  })

  return (
    <div>
      <Header/>
      <div>{recipes ? [recipeComponents] : "loading"}</div>
    </div>
  );
}

export default App;
