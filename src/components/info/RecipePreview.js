
const RecipePreview = (props) => {
    const {recipe, setMaterialId, setRecipeId, setRecipeListShow} = props
    return (
        <div
        onClick={() => {
                setRecipeId(recipe.id)
                setMaterialId(null)
                setRecipeListShow(false)
            }}
        >
            {recipe.name}
        </div>
    )
}

export default RecipePreview