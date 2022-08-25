import { useEffect, useState } from "react"
import { Row, Col } from 'react-bootstrap'
import { MaterialPreview } from "./MaterialPreview"
import { getOneInventory } from "../../api/inventories"

export const Inventory = (props) => {
    const {character, setMaterialId, setRecipeListShow, setRecipeId} = props

    const [charInventory, setCharInventory] = useState(null)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        getOneInventory(character.id)
    }, [updated])

    // let materialPreviews
    // materialPreviews = character.inventory.map((material, index) => {
    //     return <MaterialPreview key={index} material={material} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
    // })

    return (
        <div style={{border: "4px solid rgb(229,120,61)"}}>
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