
export const MaterialPreview = (props) => {
    const material = props.material
    return (
        <div style={{border: "2px solid black", display: "inline-block"}} onClick={() => console.log(material.name)}>
            <p>{material.name}</p>
            <p>{material.amount}</p>
        </div>
    )
}