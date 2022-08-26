// this component shows one material based on the fetch from InfoContainer

const MaterialView = (props) => {
    const { material } = props
    console.log('material in MaterialView', material)
    const materialImagePath = '/images/materials/' + material.material_image
    return (
        <div style={{margin:"5px", paddingBottom: "15%", textAlign: "center"}}>
            <h2>{material.material_name}</h2>
            <div className="my-3" style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
            <div className="ui-container" style={{display: "inline-block"}}>
            <img src={materialImagePath}/>
            </div>
            </div>
            <div>{material.material_description}</div>
        </div>
    )
}

export default MaterialView