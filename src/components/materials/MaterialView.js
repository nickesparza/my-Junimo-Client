

const MaterialView = (props) => {
    const material = props.material
    console.log(material)

    return (
        <div style={{border: "2px solid black"}}>
            <div>{material.name}</div>
            <div>{material.description}</div>
        </div>
    )
}

export default MaterialView