import { CharacterPreview } from "./CharacterPreview"

const CharacterList = (props) => {
    const {characters, setCharacter} = props

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <CharacterPreview
                    key={index}
                    character={character}
                    setCharacter={setCharacter}/>
    })

    return (
        <div style={{border: "2px solid black", display: "inline-block"}}>
            <p>This is the Character List component.</p>
            {charPreviews}
        </div>
    )
}

export default CharacterList