// this component shows one material based on the fetch from InfoContainer
import { useEffect } from "react"
import EditQuantity from "./EditQuantity"
const MaterialView = (props) => {
    const { user, inventory, characterId, setInvUpdated } = props
    console.log('material in MaterialView', inventory)

    // useEffect(() => {
    //     console.log('useEffect ran in MaterialView', inventory)
    // }, [inventory])

    const materialImagePath = '/images/materials/' + inventory.material.material_image
    return (
        <>
            <div style={{margin:"5px", textAlign: "center"}}>
                <h2>{inventory.material.material_name}</h2>
                <div className="my-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                <div className="ui-container" style={{display: "inline-block"}}>
                <img src={materialImagePath}/>
                </div>
                </div>
                <div>{inventory.material.material_description}</div>
                <div>You have {inventory.amount}.</div>
            </div>
            <div>
                <EditQuantity user={user} inventory={inventory} characterId={characterId} setInvUpdated={setInvUpdated}/>
            </div>
        </>
    )
}

export default MaterialView