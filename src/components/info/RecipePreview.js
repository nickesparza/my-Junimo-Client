
const RecipePreview = (props) => {
    const {recipe, setMaterialId, setRecipeId, setRecipeListShow} = props
    const recipeImagePath = "images/recipes/" + recipe.recipe_image
    // console.log(recipeImagePath)
    // console.log(recipeImagePath)
    return (
        <div style={{margin: "2px"}}
        onClick={() => {
                setRecipeId(recipe.id)
                setMaterialId(null)
                setRecipeListShow(false)
            }}
        >
            <img src={recipeImagePath} alt={recipeImagePath}/>
        </div>
    )
}

export default RecipePreview