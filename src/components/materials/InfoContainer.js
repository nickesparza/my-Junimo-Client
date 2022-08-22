import { useEffect, useState } from "react"
import MaterialView from "./MaterialView"
import EditQuantityForm from "./EditQuantityForm"

export const InfoContainer = (props) => {
    const {character, materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
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
            console.log('this is material', material)
        } else if (recipeId) {
            console.log('pretend this is a recipe fetch')
            setRecipe(recipeId)
        } else if (recipeListShow) {
            console.log('pretend this is fetching all recipes')
            setRecipeList([
                {
                    name: "gate",
                    description: "Allows you to pass through a fence.",
                    ingredients: [
                        {name: "wood", amount: 10}
                    ],
                }
            ])
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

    if (material && !recipeId && !recipeListShow) {
        return (
            <div style={{border: "2px solid black", display: "inline-block"}}>
                <MaterialView material={material}/>
                <EditQuantityForm character={character} materialIndex={character.inventory.indexOf(material)}/>
            </div>
        )
    } else if (recipeId && !material && !recipeListShow) {
        return (
            <div style={{border: "2px solid black", display: "inline-block"}}
                onClick={() => {
                    setRecipeId(null)
                    setMaterialId(null)
                    setRecipeListShow(false)
                }}>
            Only a recipe is showing up here.
            </div>
        )
    } else if (recipeListShow && !recipeId) {
        return (
            <div style={{border: "2px solid black", display: "inline-block"}}
                onClick={() => {
                    setRecipeId(null)
                    setMaterialId(null)
                    setMaterial(null)
                    setRecipeListShow(false)
                }}>
            This is the entire recipe list.
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
        Some wires got crossed. Check the state of recipe, material, and/or recipe list show.
        </div>
    )
}