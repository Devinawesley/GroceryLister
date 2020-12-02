import Ingredient from './Ingredient'
import './CSS/Recipe.css'

const Recipe = ((props)=>{
    const ingred = Object.keys(props.recipe.ingredients)
    const ingredientComponents = ingred.map(ingred => {
        return(
            <Ingredient ingredient = {ingred} qty = {props.recipe.ingredients[ingred]}/>
        )
    })
    return(
        <div className = "card">
            <div className = "container">
                <h2>{props.recipe.name}</h2>
                {ingredientComponents}
            </div>
        </div>
    )
})

export default Recipe
