import { CharacterDetails } from "./CharacterDetails"

export const ProfileContainer = (props) => {
    const { character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow } = props

    const divStyle = {
        // border: "2px solid black",
        width: "100%",
        height: "100%",
        border: "4px solid rgb(229,120,61)"
    }

    return (
        <div className="ui-container" style={divStyle}>
            <h4>{character.name}</h4>
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

