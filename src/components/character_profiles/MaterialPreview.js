
export const MaterialPreview = (props) => {
    const {material, setMaterialId, setRecipeListShow, setRecipeId} = props
    return (
        <div
            style={{border: "4px solid rgb(229,120,61)", display: "inline-block", padding: "10px"}}
            onClick={() => {
                setRecipeId(null)
                setRecipeListShow(false)
                setMaterialId(1)
            }}
        >
            This is a material.
        </div>
    )
}