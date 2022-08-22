import { CharacterDetails } from "./CharacterDetails"

export const ProfileContainer = (props) => {
    const { character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow } = props

    const divStyle = {
        border: "2px solid black",
        width: "100%",
        height: "100%",
        display: "inline-block"
    }

    return (
        <div className="ui-container" style={divStyle}>
            <p>This is the Profile Container.</p>
            <CharacterDetails
                character={character}
                setCharacter={setCharacter}
                setMaterialId={setMaterialId}
                setRecipeId={setRecipeId}
                setRecipeListShow={setRecipeListShow}
            />
        </div>
    )
}

