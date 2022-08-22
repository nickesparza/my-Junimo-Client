
export const CharacterPreview = (props) => {
    const {character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props

    const divStyle = {
        border: "2px solid black",
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
                if (character) {
                    setCharacter(character)
                } else {
                    setCharacter(null)
                }
                }}>
            {character.name}
        </div>
    )
}

