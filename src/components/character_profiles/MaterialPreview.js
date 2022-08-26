// this component will render a single material once it's hooked up
// but materials ARE hooked up, why have I not done this yet...?
export const MaterialPreview = (props) => {
    const {material, setMaterialId, setRecipeListShow, setRecipeId} = props
    const materialImagePath = "/images/materials/" + material.material_image
    return (
        <div
            style={{padding: "10px"}}
            onClick={() => {
                setRecipeId(null)
                setRecipeListShow(false)
                setMaterialId(material.id)
            }}
        >
            <img className="selector" src={materialImagePath}/>
        </div>
    )
}