// this absolute monster handles conditional rendering for blueprint list, single blueprint view, and single material view
// will also handle editing inventory quantities, in theory
// runs a wild conditional fetch depending on the state of recipeId, materialId, and showRecipeList in UserHome component
import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"
import CloseButton from "../shared/CloseButton"
import RecipeList from "./RecipeList"
import RecipeView from "./RecipeView"
import { getAllBlueprints, getOneBlueprint } from "../../api/blueprints"
import { getOneMaterial } from "../../api/materials"
import { getOneBlueprintMaterials } from "../../api/blueprint_materials"

export const InfoContainer = (props) => {
    // extract all UserHome variables from props
    // user will be used once updateInventory is implemented
    const {user, character, materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [blueprint, setBlueprint] = useState(null)

    // console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
        // if materialId is set in state, fetch a material, otherwise set it to null
        // this is in case the user jumps straight from looking at a material to looking at a recipe, for example
        if (materialId) {
            console.log('this is a material fetch')
            getOneMaterial(materialId)
                .then(res => setMaterial(res.data.material))
        } else {
            setMaterial(null)
        }
        // do the same for recipe Id
        if (recipeId) {
            console.log('this is a blueprint fetch')
            getOneBlueprintMaterials(recipeId)
                .then(res => setBlueprint(res.data.recipe_materials))
                .then(console.log(blueprint))
                .catch(err => console.log(err))
        } else {
            setBlueprint(null)
        }
        // recipeListShow determines if we show all recipes
        // that component handles its own visibility so no need to set state here
        if (recipeListShow) {
            getAllBlueprints()
                .then(res => setRecipeList(res.data.blueprints))
                .catch(err => console.log(err))
        }
    }, [recipeListShow, materialId, recipeId])

    const divStyle = {
        width: "100%",
    }
    if (material) {
        return (
            <div className="ui-container animated" style={divStyle}>
                <CloseButton
                handleClose={() => {
                    setMaterialId(null)
                    setRecipeId(null)
                    setRecipeListShow(false)}}
                />
                    <MaterialView material={material}/>
                    {/* <EditQuantityForm user={user} character={character} materialIndex={character.inventory.indexOf(material)}/> */}
            </div>
        )
    } else if (blueprint) {
        return (
            <div className="ui-container animated" style={divStyle}>
                <CloseButton
                handleClose={() => {
                    setMaterialId(null)
                    setRecipeId(null)
                    setRecipeListShow(false)}}
                />
                <RecipeView character={character} blueprint={blueprint} setRecipeId={setRecipeId} setMaterialId={setMaterialId} setRecipeListShow={setRecipeListShow}/>
            </div>
        )
    } else if (recipeListShow) {
        return (
            <div className="ui-container animated" style={{maxHeight: "100%", overflowY: "scroll"}}>
            <RecipeList recipes={recipeList} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            </div>
        )
    }
    // if none of those state variables are loaded, just show loading!
    return (
        <div className="ui-container animated"
            onClick={() => {
                setRecipeId(null)
                setMaterialId(null)
                setRecipeListShow(false)
            }}>
            Loading
        </div>
    )
}