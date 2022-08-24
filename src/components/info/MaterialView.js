

const MaterialView = (props) => {
    const material = props.material
    console.log('material in MaterialView', material)

    return (
        <div>
            <div>{material.name}</div>
            <div>{material.description}</div>
        </div>
    )
}

export default MaterialView