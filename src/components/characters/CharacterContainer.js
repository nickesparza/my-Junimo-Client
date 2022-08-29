// this is the parent component for the list of all a user's characters
import { Link } from "react-router-dom"
import { CharacterPreview } from "./CharacterPreview"
import { useEffect, useState } from "react"
import { getAllCharacters } from "../../api/characters"
import { Button } from "react-bootstrap"

const CharacterContainer = (props) => {
    // these props will show up a lot, it's how the conditional rendering of character details and recipe/material/etc details are displayed
    const {user, charUpdated, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props
    // this component fetches all characters for a given user, which is held in state
    const [characters, setCharacters] = useState([])

    useEffect(() => {
        console.log('useEffect has run in CharacterContainer')
        // get all characters belonging to a user
        getAllCharacters(user)
            .then(res => setCharacters(res.data.characters))
            .catch(err => console.log(err))
    // only re-run if a character has been updated (to get their new name, if needed)
    // eslint-disable-next-line
    }, [charUpdated])

    // getAllCharacters returns an array of characters
    // map through this array to return a preview component for each character
    // this is what the user clicks on to view the full details of that character
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
        console.log('these are the character previews', charPreviews)
    }

    const divStyle = {
        width: "100%",
        height: "100%"
    }
    // check if there are any character preview components
    // if there are, render them
    // if not, show that there are none
    // and always show a button that routes to the create page
    return (
        <div className="ui-container" style={divStyle}>
            <h4>{user.email}'s Characters</h4>
            {
                characters.length > 0 ? charPreviews : <p style={{textAlign: "center"}}>No characters yet!</p>
            }
            <div style={{display: "flex", justifyContent: "center"}}>
                <Link to="/create-character"><Button variant="success">Add Character</Button></Link>
            </div>
        </div>
    )
}

export default CharacterContainer