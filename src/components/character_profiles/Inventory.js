import { MaterialPreview } from "./MaterialPreview"

export const Inventory = (props) => {
    const {inventory, setMaterialId, setRecipeListShow, setRecipeId} = props

    let materialPreviews
    materialPreviews = inventory.map((material, index) => {
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