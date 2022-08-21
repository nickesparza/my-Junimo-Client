
export const MaterialPreview = (props) => {
    const {material, setMaterialId, setRecipeListShow, setRecipeId} = props
    return (
        <div
            style={{border: "2px solid black", display: "inline-block"}}
            onClick={() => {
                setRecipeId(null)
                setRecipeListShow(false)
                setMaterialId(material.id)
            }}
        >
            <p>{material.name}</p>
            <p>{material.amount}</p>
        </div>
    )
}