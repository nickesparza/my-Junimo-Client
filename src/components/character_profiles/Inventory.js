import { MaterialPreview } from "./MaterialPreview"

export const Inventory = (props) => {
    const inventory = props.inventory

    let materialPreviews
    materialPreviews = inventory.map((material, index) => {
        return <MaterialPreview key={index} material={material}/>
    })

    return (
        <div style={{border: "2px solid black"}}>
            <p>This is the inventory.</p>
            {materialPreviews}
        </div>
    )
}