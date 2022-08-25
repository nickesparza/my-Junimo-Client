
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
        <div style={{margin:"5px", paddingBottom: "15%", textAlign: "center"}}
        onClick={() => {
            setRecipeId(null)
            setMaterialId(null)
            setRecipeListShow(false)
        }}>
            <h2>{blueprint.recipe_name}</h2>
            <div className="ui-container" style={{display: "inline-block" }}>
            <img src={recipeImagePath} alt={recipeImagePath} style={{width: "130px"}}/>
            </div>
            <div>{blueprint.recipe_description}</div>
        </div>
    )
}

export default RecipeView