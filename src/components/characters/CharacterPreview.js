
export const CharacterPreview = (props) => {
    const character = props.character

    const divStyle = {
        border: "2px solid black",
        margin: "5px"
    }
    return (
        <div style={divStyle}  onClick={() => console.log(`you clicked on ${character.name}`)}>
            {character.name}
        </div>
    )
}

