import { CharacterPreview } from "./CharacterPreview"

const CharacterList = (props) => {
    const {characters, setCharacter, selectCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <CharacterPreview
                    key={index}
                    character={character}
                    setCharacter={setCharacter}
                    selectCharacter={selectCharacter}
                    setMaterialId={setMaterialId}
                    setRecipeId={setRecipeId}
                    setRecipeListShow={setRecipeListShow}
                    />
    })

    const divStyle = {
        width: "100%",
        height: "100%",
        border: "4px solid rgb(229,120,61)"
    }

    return (
        <div className="ui-container" style={divStyle}>
            <h4>Characters</h4>
            {charPreviews}
        </div>
    )
}

export default CharacterList