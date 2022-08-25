
const CloseButton = (props) => {
    const {handleClose} = props

    const divStyle = {
        position: "absolute",
        left: "95%",
        top: "-1%",
        backgroundColor: "red",
        color: "white",
        border: "2px solid white"
    }

    return (
        <div className="ui-container selector" style={divStyle}
        onClick={handleClose}>
            X
        </div>
    )
}

export default CloseButton