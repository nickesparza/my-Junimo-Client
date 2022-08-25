import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"
import RecipeList from "./RecipeList"
import RecipeView from "./RecipeView"
import { getAllBlueprints, getOneBlueprint } from "../../api/blueprints"

export const InfoContainer = (props) => {
    const {user, character, materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [blueprint, setBlueprint] = useState(null)

    // console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
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
        } else {
            console.log(`something is weird:
            RecipeId: ${recipeId}
            MaterialId: ${materialId}
            recipeListShow: ${recipeListShow}
            material: ${material}
            blueprint: ${blueprint}`)
        }
    }, [recipeListShow, materialId, recipeId])

    console.log('this is the blueprint in infoContainer', blueprint)
    console.log(`something is weird:
            RecipeId: ${recipeId}
            MaterialId: ${materialId}
            recipeListShow: ${recipeListShow}
            material: ${material}
            blueprint: ${blueprint}`)

    const divStyle = {
        width: "100%",
    }

    if (!material && !blueprint && !recipeList) {
        return <div className="ui-container">Loading</div>
    }

    if (material && !blueprint && !recipeListShow) {
        return (
            <div className="ui-container" style={divStyle}>
                {
                    material
                    ?
                    <>
                    <MaterialView material={material}/>
                    <EditQuantityForm user={user} character={character} materialIndex={character.inventory.indexOf(material)}/>
                    </>
                    :
                    null
                }
            </div>
        )
    } else if (blueprint) {
        return (
            <div className="ui-container" style={divStyle}>
                <RecipeView character={character} blueprint={blueprint} setRecipeId={setRecipeId} setMaterialId={setMaterialId} setRecipeListShow={setRecipeListShow}/>
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
        <div className="ui-container"
            onClick={() => {
                setRecipeId(null)
                setMaterialId(null)
                setMaterial(null)
                setRecipeListShow(false)
            }}>
            Whoops.
        </div>
    )
}