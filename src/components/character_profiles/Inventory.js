import { useEffect, useState } from "react"
import { MaterialPreview } from "./MaterialPreview"
import { getOneInventory } from "../../api/inventories"

export const Inventory = (props) => {
    const {character, setMaterialId, setRecipeListShow, setRecipeId} = props

    const [charInventory, setCharInventory] = useState(null)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        getOneInventory(character.id)
    }, [updated])

    let materialPreviews
    materialPreviews = character.inventory.map((material, index) => {
        return <MaterialPreview key={index} material={material} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    })

    return (
        <div style={{border: "4px solid rgb(229,120,61)"}}>
            <h3 style={{textAlign: "center"}}>Inventory</h3>
            <div style={{display: "flex", justifyContent: "space-evenly"}}>
                {materialPreviews}
            </div>
        </div>
    )
}