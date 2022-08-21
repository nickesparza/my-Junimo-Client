import { useEffect, useState } from "react"
import { ProfileContainer } from "../character_profiles/ProfileContainer"
import CharacterList from "./CharacterList"
import { InfoContainer } from "../materials/InfoContainer"

const CharacterContainer = (props) => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    const [recipeListShow, setRecipeListShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        console.log('useEffect ran in the CharacterContainer')
        // there will be a fetch here to get all characters from user
        setCharacters(user.characters)
    }, [updated])

    return (
        <div style={{border: "2px solid black", alignItems: "stretch", display: "flex"}}>
            <CharacterList characters={characters} setCharacter={setCharacter}/>
            {
                character
                ?
                <ProfileContainer
                    character={character}
                    setCharacter={setCharacter}
                    setMaterialId={setMaterialId}
                    setRecipeListShow={setRecipeListShow}
                />
                :
                null
            }
            {
                materialId || recipeId || recipeListShow
                ?
                <InfoContainer
                    material={materialId}
                    recipe={recipeId}
                    setRecipeId={setRecipeId}
                    recipeListShow={recipeListShow}
                />
                :
                null
            }
        </div>
    )
}

export default CharacterContainer