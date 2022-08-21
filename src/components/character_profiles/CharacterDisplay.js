
export const CharacterDisplay = (props) => {
    const {character, setCharacter} = props
    return (
        <div onClick={() => setCharacter(null)}>
            This is the character information.
            <div>Name: {character.name}</div>
            <div>Farm Type: {character.farm_type}</div>
        </div>
    )
}