// this component fetches the character's inventory and displays it
// still a work in progress, what SHOULD happen eventually is that every material shows up with a quantity of 0
// user can click a resource and then add a new quantity in the info pane
// will need to be passed the invUpdated prop from UserHome to trigger the refresh
import { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { MaterialPreview } from "./MaterialPreview"
import { getOneInventory } from "../../api/inventories"

export const Inventory = (props) => {
    const {character, setMaterialId, setRecipeListShow, setRecipeId} = props

    const [inventory, setInventory] = useState(null)
    const [updated, setUpdated] = useState(false)
    // this does nothing right now but will once inventory is a model we can retrieve
    useEffect(() => {
        getOneInventory(character.id)
    }, [updated])

    // material previews need to come from a getAllMaterials fetch that we may not need, we'll see
    // let materialPreviews
    // materialPreviews = character.inventory.map((material, index) => {
    //     return <MaterialPreview key={index} material={material} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    // })

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
            <div style={{display: "flex"}}>
                {/* {materialPreviews} */}
                <MaterialPreview setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            </div>
        </div>
    )
}