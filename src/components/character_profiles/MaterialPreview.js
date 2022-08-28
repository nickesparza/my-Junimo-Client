// this component will render a single material once it's hooked up
// but materials ARE hooked up, why have I not done this yet...?
export const MaterialPreview = (props) => {
    const {inventory, setMaterialId, setRecipeListShow, setRecipeId} = props
    const materialImagePath = "/images/materials/" + inventory.material.material_image
    return (
        <div
            style={{padding: "10px"}}
            onClick={() => {
                setRecipeId(null)
                setRecipeListShow(false)
                setMaterialId(inventory.material.id)
            }}
        >
            <img title={inventory.material.material_name} className="selector" src={materialImagePath}/>
            <div style={{textAlign: "center"}}>{inventory.amount}</div>
        </div>
    )
}