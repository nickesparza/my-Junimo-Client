import { Link } from "react-router-dom"
import { CharacterPreview } from "./CharacterPreview"

const CharacterContainer = (props) => {
    const {user, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props

    let charPreviews
    charPreviews = props.user.characters.map((character, index) => {
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
                <Link to="/create-character">Add Character</Link>
            </div>
        </div>
    )
}

export default CharacterContainer