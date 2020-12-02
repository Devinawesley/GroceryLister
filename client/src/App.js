import Header from './Header'
import { useEffect, useState } from 'react'
import Recipe from './Recipe'
import './CSS/App.css'


function App() {
  const[recipes, setRecipes] = useState()
  const[loading, setLoading] = useState(true)
  let recipeComponents = []
  useEffect(()=>{
    console.log('mounted')
    fetch("http://10.0.0.26:3001/recipes/1234")
    .then(response => response.json())
    .then(data =>{
      setRecipes(data)
      console.log(recipes)
      setLoading(false)
    })
  }, [loading])

  if(!loading){ 
    recipeComponents = recipes.map(R => {
      return(
        <Recipe recipe = {R} />
      )
    })
  }

  return (
    <div>
      <Header/>
      <div className='container'>{recipes ? [recipeComponents] : "loading"}</div>
    </div>
  );
}

export default App;
