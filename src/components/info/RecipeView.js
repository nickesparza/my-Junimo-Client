
const RecipeView = (props) => {
    const {blueprint, setMaterialId, setRecipeId, setRecipeListShow} = props
    console.log('this is the recipe in RecipeView', blueprint)
    const recipeImagePath = "images/recipes/" + blueprint.recipe_image
    // recipe.ingredients.forEach(ingredient => {
    //     if (inventory.includes(ingredient)) {
    //         isCraftable = true
    //     } else {
    //         return isCraftable = false
    //     }
    // })

    return (
        <div style={{margin:"5px", paddingBottom: "15%"}}
        onClick={() => {
            setRecipeId(null)
            setMaterialId(null)
            setRecipeListShow(false)
        }}>
            <div>{blueprint.recipe_name}</div>
            <img src={recipeImagePath} alt={recipeImagePath}/>
            <div>{blueprint.recipe_description}</div>
        </div>
    )
}

export default RecipeView