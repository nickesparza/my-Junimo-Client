// this component fetches the character's inventory and displays it
// still a work in progress, what SHOULD happen eventually is that every material shows up with a quantity of 0
// user can click a resource and then add a new quantity in the info pane
// will need to be passed the invUpdated prop from UserHome to trigger the refresh
import { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { MaterialPreview } from "./MaterialPreview"
import { getCharacterInventory, getSingleInventory } from "../../api/inventories"

export const Inventory = (props) => {
    const {user, character, invUpdated, setMaterialId, setRecipeListShow, setRecipeId} = props
    const [inventory, setInventory] = useState(null)

    useEffect(() => {
        // this does nothing right now but will once inventory is a model we can retrieve
        console.log('this is the character in inventory', character)
        getCharacterInventory(user, character.id)
            .then(res => {
                res.data.inventory = res.data.inventory.sort((a, b) => {
                    return a.material.id - b.material.id
                })
                return res
            })
            .then(res => setInventory(res.data.inventory))
            .catch(err => console.log(err))
        // getAllMaterials()
        //     .then(res => {
        //         console.log(res)
        //         return res
        //     })
        //     .then(res => setMaterials(res.data.materials))
        //     .then(console.log('these are the materials in inventory', materials))
        //     .catch(err => console.log(err))
    }, [character, invUpdated])

    // material previews need to come from a getAllMaterials fetch
    let materialPreviews
    if (inventory) {
        materialPreviews = inventory.map((inventory, index) => {
            return <MaterialPreview key={index} inventory={inventory} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
        })
    }

    return (
        <div className="ui-container m-3">
            <Row className="mt-3">
                <Col>
                    <h3>Inventory</h3>
                </Col>
                <Col style={{textAlign: "center"}}>
                    <button onClick={() => {
                        setMaterialId(null)
                        setRecipeId(null)
                        setRecipeListShow(prev => !prev)
                        }}
                    style={{alignSelf: "center"}}>
                    Show Recipes
                    </button>
                </Col>
            </Row>
            <div style={{display: "flex", flexWrap: "wrap", justifyContent: "center", overflow: "scroll", height: "300px", overflow: "scroll"}}>
                {materialPreviews}
            </div>
        </div>
    )
}