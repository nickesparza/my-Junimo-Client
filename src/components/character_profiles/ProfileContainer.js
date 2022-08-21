import { CharacterDetails } from "./CharacterDetails"

export const ProfileContainer = (props) => {
    const { character, setCharacter, setMaterialId, setRecipeListShow } = props

    const divStyle = {
        border: "2px solid black",
        display: "inline-block"
    }

    return (
        <div style={divStyle}>
            <p>This is the Profile Container.</p>
            <CharacterDetails character={character} setCharacter={setCharacter} setMaterialId={setMaterialId} setRecipeListShow={setRecipeListShow}/>
        </div>
    )
}

