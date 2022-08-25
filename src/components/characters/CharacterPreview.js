
export const CharacterPreview = (props) => {
    const {character, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props

    const divStyle = {
        border: "4px solid rgb(229,120,61)",
        backgroundColor: "rgb(255,213,139)",
        margin: "5px",
        padding: "2px"
    }
    
    return (
        <div className="selector"
            style={divStyle}
            onClick={() => {
                console.log('this is the character', character)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
                // this is a temporary state mod to be deleted once backend is up and running
                setCharacterId(character.id)
                }}>
            <h5 style={{margin: "0"}}>{character.name}</h5>
        </div>
    )
}

