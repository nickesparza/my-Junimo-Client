
const RecipeView = (props) => {
    const {blueprint} = props
    console.log('this is the recipe in RecipeView', blueprint)
    const recipeImagePath = "images/recipes/" + blueprint.recipe_image

    return (
        <div style={{margin:"5px", paddingBottom: "15%", textAlign: "center"}}>
            <h2>{blueprint.recipe_name}</h2>
            <div className="ui-container my-2" style={{display: "flex", width: "150px", height: "150px", justifyContent: "center", alignItems: "center"}}>
            <img src={recipeImagePath} alt={recipeImagePath}/>
            </div>
            <p>{blueprint.recipe_description}</p>
        </div>
    )
}

export default RecipeView