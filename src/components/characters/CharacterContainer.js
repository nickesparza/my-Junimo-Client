import { Link } from "react-router-dom"
import { CharacterPreview } from "./CharacterPreview"
import { useEffect, useState } from "react"
import { getAllCharacters } from "../../api/characters"

const CharacterContainer = (props) => {
    const {user, charUpdated, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        console.log('useEffect has run in CharacterContainer')
        getAllCharacters(user)
            .then(res => setCharacters(res.data.characters))
            .catch(err => console.log(err))
    }, [charUpdated])

    let charPreviews
    if (characters.length > 0) {
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
    }

    const divStyle = {
        width: "100%",
        height: "100%"
    }

    return (
        <div className="ui-container" style={divStyle}>
            <h4>Characters</h4>
            {
                charPreviews ? charPreviews : <p style={{textAlign: "center"}}>No characters yet!</p>
            }
            <div>
                <Link to="/create-character"><button style={divStyle}>Add Character</button></Link>
            </div>
        </div>
    )
}

export default CharacterContainer