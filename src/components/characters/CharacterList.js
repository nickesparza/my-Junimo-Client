import { CharacterPreview } from "./CharacterPreview"

const CharacterList = (props) => {
    const {characters, setCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <CharacterPreview
                    key={index}
                    character={character}
                    setCharacter={setCharacter}
                    setMaterialId={setMaterialId}
                    setRecipeId={setRecipeId}
                    setRecipeListShow={setRecipeListShow}
                    />
    })

    return (
        <div style={{border: "2px solid black", display: "inline-block"}}>
            <p>This is the Character List component.</p>
            {charPreviews}
        </div>
    )
}

export default CharacterList