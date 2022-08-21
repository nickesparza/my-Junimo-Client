import { useEffect, useState } from "react"

export const InfoContainer = (props) => {
    const {materialId, recipeId, setMaterialId, setRecipeId, recipeListShow, setRecipeListShow} = props
    const [material, setMaterial] = useState(null)
    const [recipe, setRecipe] = useState(null)

    // console.log('InfoContainer has loaded')
    // console.log('props in InfoContainer', props)
    useEffect(() => {
        console.log('useEffect has run in InfoContainer')
        if (materialId) {
            console.log('pretend this is a material fetch')
            setMaterial(materialId)
        } else if (recipeId) {
            console.log('pretend this is a recipe fetch')
            setRecipe(recipeId)
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
        console.log(`RecipeId: ${recipeId}\nMaterialId: ${materialId}\nrecipeListShow: ${recipeListShow}`)
    }, [recipeListShow, materialId, recipeId])

    if (materialId && !recipeId && !recipeListShow) {
        return (
            <div style={{border: "2px solid black", display: "inline-block"}}
                onClick={() => {
                    setRecipeId(null)
                    setMaterialId(null)
                    setRecipeListShow(false)
                }}>
            Only a material is showing up here.
            </div>
        )
    } else if (recipeId && !materialId && !recipeListShow) {
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
    } else if (recipeListShow && !materialId && !recipeId) {
        return (
            <div style={{border: "2px solid black", display: "inline-block"}}
                onClick={() => {
                    setRecipeId(null)
                    setMaterialId(null)
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
                setRecipeListShow(false)
            }}>
        Some wires got crossed. Check the state of recipe, material, and/or recipe list show.
        </div>
    )
}