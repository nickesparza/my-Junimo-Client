
export const CharacterPreview = (props) => {
    const {character, setCharacter} = props

    const divStyle = {
        border: "2px solid black",
        margin: "5px"
    }
    return (
        <div
            style={divStyle}
            onClick={() => {
                console.log('this is the character', character)
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

