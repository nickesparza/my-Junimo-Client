import { Inventory } from "./Inventory"
import { CharacterDisplay } from "./CharacterDisplay"
import { useEffect } from "react"

export const CharacterDetails = (props) => {
    const {character, setMaterialId, setRecipeId, setRecipeListShow} = props

    return (
        <div>
            <CharacterDisplay character={character} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
            <Inventory character={character} setMaterialId={setMaterialId} setRecipeId={setRecipeId} setRecipeListShow={setRecipeListShow}/>
        </div>
    )
}