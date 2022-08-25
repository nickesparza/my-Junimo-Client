

const MaterialView = (props) => {
    const { material, setMaterialId, setRecipeId, setRecipeListShow } = props
    console.log('material in MaterialView', material)
    const materialImagePath = '/images/materials/' + material.material_image
    return (
        <div style={{margin:"5px", paddingBottom: "15%", textAlign: "center"}}>
            <h2>{material.material_name}</h2>
            <div className="ui-container" style={{display: "inline-block"}}>
            <img src={materialImagePath} style={{width: "120px"}}/>
            </div>
            <div>{material.material_description}</div>
        </div>
    )
}

export default MaterialView