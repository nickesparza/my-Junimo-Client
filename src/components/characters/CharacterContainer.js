import { Link } from "react-router-dom"
import { CharacterPreview } from "./CharacterPreview"
import { useEffect, useState } from "react"
import { getAllCharacters } from "../../api/characters"

const CharacterContainer = (props) => {
    const {user, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props
    const [characters, setCharacters] = useState(null)

    useEffect(() => {
        console.log('useEffect has run in CharacterContainer')
        getAllCharacters(user)
            .then(res => setCharacters(res.data.characters))
            .catch(err => console.log(err))
    }, [])

    if (!characters) {
        return <p>No Characters here.</p>
    }

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <CharacterPreview
                    key={index}
                    character={character}
                    setCharacterId={setCharacterId}
                    setMaterialId={setMaterialId}
                    setRecipeId={setRecipeId}
                    setRecipeListShow={setRecipeListShow}
                    />
    })

    const divStyle = {
        width: "100%",
        height: "100%",
    }

    return (
        <div className="ui-container" style={divStyle}>
            <h4>Characters</h4>
            {charPreviews}
            <div>
                <Link to="/create-character"><button style={divStyle}>Add Character</button></Link>
            </div>
        </div>
    )
}

export default CharacterContainer