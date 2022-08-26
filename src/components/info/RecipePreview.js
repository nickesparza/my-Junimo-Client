// component that loads a single recipe image inside of the RecipeList component
const RecipePreview = (props) => {
    const {recipe, setMaterialId, setRecipeId, setRecipeListShow} = props
    // set image path to the recipe's recipe_image field
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
            <img className="selector" src={recipeImagePath} alt={recipeImagePath}/>
        </div>
    )
}

export default RecipePreview