import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"
import CloseButton from "../shared/CloseButton"
import RecipeList from "./RecipeList"
import RecipeView from "./RecipeView"
import { getAllBlueprints, getOneBlueprint } from "../../api/blueprints"
import { getOneMaterial } from "../../api/materials"

export const InfoContainer = (props) => {
    const {user, character, materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [blueprint, setBlueprint] = useState(null)

    // console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
        if (materialId) {
            console.log('this is a material fetch')
            getOneMaterial(materialId)
                .then(res => setMaterial(res.data.material))
        } else {
            setMaterial(null)
        }
        if (recipeId) {
            console.log('this is a blueprint fetch')
            getOneBlueprint(recipeId)
                .then(res => setBlueprint(res.data.blueprint))
                .catch(err => console.log(err))
        } else {
            setBlueprint(null)
        }
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
                    <MaterialView material={material} setRecipeId={setRecipeId} setMaterialId={setMaterialId} setRecipeListShow={setRecipeListShow}/>
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