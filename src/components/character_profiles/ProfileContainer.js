import { CharacterDetails } from "./CharacterDetails"

export const ProfileContainer = (props) => {
    const character = props.character
    const setCharacter = props.setCharacter
    return (
        <div style={{border: "2px solid black", display: "inline-block"}}>
            <p>This is the Profile Container.</p>
            <CharacterDetails character={character} setCharacter={setCharacter} />
        </div>
    )
}

