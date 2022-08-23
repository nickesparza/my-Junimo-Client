
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

    let isCraftable = true
    // recipe.ingredients.forEach(ingredient => {
    //     if (inventory.includes(ingredient)) {
    //         isCraftable = true
    //     } else {
    //         return isCraftable = false
    //     }
    // })

    console.log(recipeReqs)
    return (
        <div style={{margin:"5px", paddingBottom: "15%"}}
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
                isCraftable ? <p>You can craft this recipe.</p> : <p>You cannot craft this recipe.</p>
            }
        </div>
    )
}

export default RecipeView