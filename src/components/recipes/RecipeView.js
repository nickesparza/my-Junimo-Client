
const RecipeView = (props) => {
    const {recipe, setMaterialId, setRecipeId, setRecipeListShow} = props
    const inventory = props.character.inventory

    let recipeReqs
    recipeReqs = recipe.ingredients.map((ingredient, index) => {
        return <p key={index}>{ingredient.name}: {ingredient.amount}</p>
    })

    let currentInv
    currentInv = inventory.map((ingredient, index) => {
        return <p key={index}>{ingredient.name}: {ingredient.amount}</p>
    })

    console.log(recipeReqs)
    return (
        <div style={{border: "2px solid black", display: "inline-block"}}
        onClick={() => {
            setRecipeId(null)
            setMaterialId(null)
            setRecipeListShow(false)
        }}>
            <div>{recipe.name}</div>
            <div>{recipe.description}</div>
            <div>
                This recipe requires:
                {recipeReqs}
            </div>
            <div>
                You have:
                {currentInv}
            </div>
            {
                
            }
        </div>
    )
}

export default RecipeView