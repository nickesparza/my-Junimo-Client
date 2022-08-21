import { useEffect, useState } from "react"
import CharacterList from "./CharacterList"

const CharacterContainer = (props) => {
    const [characters, setCharacters] = useState([])
    const user = props.user

    useEffect(() => {
        setCharacters(user.characters)
    }, [])

    return (
        <div style={{border: "2px solid black"}}>
            <CharacterList characters={characters}/>
            {/* This will be where the Profile Container goes too. It will be conditionally rendered based on if visibility is set to true */}
        </div>
    )
}

export default CharacterContainer