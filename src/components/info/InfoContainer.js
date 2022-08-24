import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"
import RecipeList from "./RecipeList"
import RecipeView from "./RecipeView"
import { getAllBlueprints } from "../../api/blueprints"

export const InfoContainer = (props) => {
    const {user, character, materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [recipe, setRecipe] = useState(null)

    // console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
        if (materialId) {
            console.log('pretend this is a material fetch')
            setMaterial(character.inventory.find(material => material.id === materialId))
        } else if (recipeId) {
            console.log('pretend this is a recipe fetch')
        } else if (recipeListShow) {
            getAllBlueprints(user)
                .then(res => setRecipeList(res.data.blueprints))
                .catch(err => console.log(err))
        } else {
            console.log(`something is weird:
            RecipeId: ${recipeId}
            MaterialId: ${materialId}
            recipeListShow: ${recipeListShow}
            material: ${material}
            recipe: ${recipe}`)
        }
    }, [recipeListShow, materialId, recipeId])

    const divStyle = {
        width: "100%",
    }

    if (!material && !recipeId && !recipeList) {
        return <p>Loading</p>
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
    } else if (recipeListShow) {
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