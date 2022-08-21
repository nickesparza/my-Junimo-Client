import { MaterialPreview } from "./MaterialPreview"

export const Inventory = (props) => {
    const {inventory, setMaterialId, setRecipeListShow, setRecipeId} = props

    let materialPreviews
    materialPreviews = inventory.map((material, index) => {
        return <MaterialPreview key={index} material={material} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    })

    return (
        <div style={{border: "2px solid black"}}>
            <p>This is the inventory.</p>
            {materialPreviews}
        </div>
    )
}