import Ingredient from './Ingredient'

const Recipe = ((props)=>{
    const ingred = Object.keys(props.recipe.ingredients)
    const ingredientComponents = ingred.map(ingred => {
        return(
            <Ingredient ingredient = {ingred} qty = {props.recipe.ingredients[ingred]}/>
        )
    })
    return(
        <div>
            <h2>{props.recipe.name}</h2>
            {ingredientComponents}
        </div>
    )
})

export default Recipe