

const MaterialView = (props) => {
    const { material, setMaterialId, setRecipeId, setRecipeListShow } = props
    console.log('material in MaterialView', material)

    return (
        <div onClick={() => {
            setMaterialId(null)
            setRecipeId(null)
            setRecipeListShow(false)
        }}>
            <div>{material.material_name}</div>
            <div>{material.material_description}</div>
        </div>
    )
}

export default MaterialView