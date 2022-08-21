import { useEffect, useState } from "react"
import { ProfileContainer } from "../character_profiles/ProfileContainer"
import CharacterList from "./CharacterList"

const CharacterContainer = (props) => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState(null)
    const [updated, setUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        console.log('useEffect ran in the CharacterContainer')
        // there will be a fetch here to get all characters from user
        setCharacters(user.characters)
    }, [])

    return (
        <div style={{border: "2px solid black", alignItems: "stretch", display: "flex"}}>
            <CharacterList characters={characters} setCharacter={setCharacter}/>
            {/* This will be where the Profile Container goes too. It will be conditionally rendered based on if visibility is set to true */}
            {
                character ? <ProfileContainer character={character} setCharacter={setCharacter}/> : null
            }
        </div>
    )
}

export default CharacterContainer