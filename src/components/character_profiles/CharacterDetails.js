import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"

export const CharacterDetails = (props) => {
    const {character, setCharacter} = props
    return (
        <div style={{border: "2px solid black"}}>
            <CharacterDisplay character={character} setCharacter={setCharacter}/>
            {/* <EditCharacterModal/> */}
            <Inventory inventory={character.inventory}/>
            {/* ViewRecipeButton */}
        </div>
    )
}