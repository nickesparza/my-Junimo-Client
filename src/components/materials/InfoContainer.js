import { useEffect, useState } from "react"

export const InfoContainer = (props) => {
    const {material, recipe, setRecipeId, recipeListShow} = props
    useEffect(() => {
        if (material) {
            console.log('pretend this is a material fetch')
        } else if (recipe) {
            console.log('pretend this is a recipe fetch')
        }
    }, [material, recipe])

    return (
        <div style={{border: "2px solid black", display: "inline-block"}}>
            This is the Info Container for materials and recipes.
        </div>
    )
}