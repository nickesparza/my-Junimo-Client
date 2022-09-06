// show all recipes from the fetch in InfoContainer
// take recipes as props and map over them
import RecipePreview from "./RecipePreview"

const RecipeList = (props) => {
    const {recipes, setMaterialId, setRecipeId, setRecipeListShow} = props
    console.log('this is the recipes prop', recipes)
    if (!recipes) {
        return <p>loading</p>
    }

    let allRecipes
    allRecipes = recipes.map((recipe, index) => (
        <RecipePreview key={index} recipe={recipe} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    ))

    console.log('this is what is stored in allRecipes', allRecipes)
    
    if (allRecipes.length < recipes.length) {
        return <p>Loading</p>
    }

    return (
        <div style={{display: "flex", flexWrap: "wrap"}}>
            {allRecipes}
        </div>
    )
}

export default RecipeList