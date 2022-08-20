import { useEffect, useState } from "react"

const CharacterContainer = (props) => {
    const [characters, setCharacters] = useState([])
    const user = props.user

    useEffect(() => {
        setCharacters(user.characters)
    }, [])

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <p key={index}>{character.name}</p>
    })

    return (
        <>
            {charPreviews}
        </>
    )
}

export default CharacterContainer