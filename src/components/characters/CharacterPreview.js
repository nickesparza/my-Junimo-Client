
export const CharacterPreview = (props) => {
    const {character, setCharacter, selectCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props

    const divStyle = {
        border: "4px solid rgb(229,120,61)",
        margin: "5px"
    }
    
    return (
        <div
            style={divStyle}
            onClick={() => {
                console.log('this is the character', character)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
                selectCharacter(character.id)
                // this is a temporary state mod to be deleted once backend is up and running
                setCharacter(character)
                }}>
            {character.name}
        </div>
    )
}

