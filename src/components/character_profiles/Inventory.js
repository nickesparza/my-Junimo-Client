// this component fetches the character's inventory and displays it
// still a work in progress, what SHOULD happen eventually is that every material shows up with a quantity of 0
// user can click a resource and then add a new quantity in the info pane
// will need to be passed the invUpdated prop from UserHome to trigger the refresh
import { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { MaterialPreview } from "./MaterialPreview"
import { getOneInventory } from "../../api/inventories"
import { getAllMaterials } from "../../api/materials"

export const Inventory = (props) => {
    const {character, setMaterialId, setRecipeListShow, setRecipeId} = props

    const [materials, setMaterials] = useState(null)
    const [inventory, setInventory] = useState(null)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        // this does nothing right now but will once inventory is a model we can retrieve
        getOneInventory(character.id)
        getAllMaterials()
            .then(res => {
                console.log(res)
                return res
            })
            .then(res => setMaterials(res.data.materials))
            .then(console.log(materials))
            .catch(err => console.log(err))
    }, [updated])

    // material previews need to come from a getAllMaterials fetch
    let materialPreviews
    if (materials) {
        materialPreviews = materials.map((material, index) => {
            return <MaterialPreview key={index} material={material} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
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
            <div style={{display: "flex", flexWrap: "wrap", overflow: "scroll", height: "300px", overflow: "scroll"}}>
                {materialPreviews}
            </div>
        </div>
    )
}