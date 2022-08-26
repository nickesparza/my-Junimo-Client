// single recipe view component
// shows recipe and ingredients required
// will need a recipe_materials fetch in order to show quantities
// also may need a inventory fetch for comparison?
const RecipeView = (props) => {
    const {blueprint} = props
    console.log('this is the recipe in RecipeView', blueprint)
    const recipeImagePath = "images/recipes/" + blueprint[0].blueprint.recipe_image

    let ingredients
    ingredients = blueprint.map((ingredient, index) => {
        const materialImagePath = "images/materials/" + ingredient.material.material_image
        return (
            <div>
                <p key={index}>
                    <img src={materialImagePath} style={{maxWidth: "30px"}}/>
                    {ingredient.material.material_name}: {ingredient.amount_needed}
                    </p>
            </div>
        )
    })

    return (
        <div style={{margin:"5px", paddingBottom: "15%", textAlign: "center"}}>
            <h2>{blueprint[0].blueprint.recipe_name}</h2>
            <div className="my-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="ui-container" style={{display: "flex", width: "150px", height: "150px", justifyContent: "center", alignItems: "center"}}>
                    <img src={recipeImagePath} alt={recipeImagePath}/>
                </div>
            </div>
            <p>{blueprint[0].blueprint.recipe_description}</p>
            {ingredients}
        </div>
    )
}

export default RecipeView