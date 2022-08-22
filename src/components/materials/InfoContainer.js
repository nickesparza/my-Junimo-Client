import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"
import RecipeList from "../recipes/RecipeList"
import RecipeView from "../recipes/RecipeView"

export const InfoContainer = (props) => {
    const {character, materialId, recipeId, recipeList, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    // const [recipeList, setRecipeList] = useState(null)
    const [recipe, setRecipe] = useState(null)

    console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
        if (materialId) {
            console.log('pretend this is a material fetch')
            setMaterial(character.inventory.find(material => material.id === materialId))
            console.log('this is material', material)
        } else if (recipeId) {
            console.log('pretend this is a recipe fetch')
            setRecipe(recipeList.find(recipe => recipe.id === recipeId))
            console.log('this is the recipe: ', recipe)
        } else if (recipeListShow) {
            console.log('pretend this is fetching all recipes')
        } else {
            console.log(`something is weird:
            RecipeId: ${recipeId}
            MaterialId: ${materialId}
            recipeListShow: ${recipeListShow}
            material: ${material}
            recipe: ${recipe}`)
        }
        console.log(`RecipeId: ${recipeId}\nMaterialId: ${materialId}\nmaterial: ${material}\nrecipeListShow: ${recipeListShow}`)
    }, [recipeListShow, materialId, recipeId])

    const divStyle = {
        border: "2px solid black",
        display: "inline-block",
        width: "100%",
        height: "100%"
    }

    if (material && !recipeId && !recipeListShow) {
        return (
            <div className="ui-container" style={divStyle}>
                {
                    material
                    ?
                    <>
                    <MaterialView material={material}/>
                    <EditQuantityForm character={character} materialIndex={character.inventory.indexOf(material)}/>
                    </>
                    :
                    null
                }
            </div>
        )
    } else if (recipeId && !materialId && !recipeListShow) {
        return (
            <div className="ui-container" style={divStyle}>
            {
                recipe
                ?
                <RecipeView character={character} recipe={recipe} setRecipeId={setRecipeId} setMaterialId={setMaterialId} setRecipeListShow={setRecipeListShow}/>
                :
                null
            }
            </div>
        )
    } else if (recipeListShow && !recipeId) {
        return (
            <div className="ui-container" style={divStyle}>
            <RecipeList recipes={recipeList} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            </div>
        )
    }
    return (
        <div style={{border: "2px solid black", display: "inline-block"}}
            onClick={() => {
                setRecipeId(null)
                setMaterialId(null)
                setMaterial(null)
                setRecipeListShow(false)
            }}>
        </div>
    )
}