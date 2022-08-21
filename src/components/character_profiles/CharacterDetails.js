import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"

export const CharacterDetails = (props) => {
    const {character, setCharacter, setMaterialId, setRecipeListShow} = props
    return (
        <div style={{border: "2px solid black"}}>
            This is the CharacterDetails component.
            <CharacterDisplay character={character} setCharacter={setCharacter}/>
            {/* <EditCharacterModal/> */}
            <Inventory inventory={character.inventory} setMaterialId={setMaterialId}/>
            {/* ViewRecipeButton */}
        </div>
    )
}