
export const MaterialPreview = (props) => {
    const {material, setMaterialId} = props
    return (
        <div
            style={{border: "2px solid black", display: "inline-block"}}
            onClick={() => {
                console.log(material.name)
                setMaterialId(material.id)
            }}
        >
            <p>{material.name}</p>
            <p>{material.amount}</p>
        </div>
    )
}