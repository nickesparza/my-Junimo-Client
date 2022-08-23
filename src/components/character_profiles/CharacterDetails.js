import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"

export const CharacterDetails = (props) => {
    const {character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props
    return (
        <div>
            <CharacterDisplay character={character} setCharacter={setCharacter} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            {/* <EditCharacterModal/> */}
            <Inventory character={character} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            {/* <button onClick={() => {
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(prev => !prev)
                }}
            >
            Show Recipes
            </button> */}
        </div>
    )
}