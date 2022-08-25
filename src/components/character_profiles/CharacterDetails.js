import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"
import { useEffect } from "react"

export const CharacterDetails = (props) => {
    const {character, setMaterialId, setRecipeId, setRecipeListShow} = props

    return (
        <div>
            <CharacterDisplay character={character} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
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