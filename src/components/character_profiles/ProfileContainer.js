// this is the main container for all profile information regarding a single character
// fetches one character's details and displays them, along with an inventory for that character
// inventory will either be created on character creation or a CRUD resource (minus delete)
import { useEffect, useState } from "react"
import { CharacterDetails } from "./CharacterDetails"
import { Container, Row, Col, Button } from "react-bootstrap"
import CloseButton from "../shared/CloseButton"
import EditCharacterModal from "./EditCharacterModal"
import { updateCharacter, deleteCharacter, getOneCharacter } from "../../api/characters"


export const ProfileContainer = (props) => {
    // pass all state variables from UserHome to trigger rendering and refreshes
    const { user, characterId, setCharacterId, setCharUpdated, setMaterialId, setRecipeId, setRecipeListShow } = props
    
    const [character, setCharacter] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        console.log('useEffect ran in the ProfileContainer')
        getOneCharacter(user, characterId)
            .then(res => setCharacter(res.data.character))
            .then(console.log('this is the character', character))
            .catch(err => console.log(err))
    }, [characterId, updated])

    const divStyle = {
        width: "100%",
        height: "100%"
    }

    // this function calls deleteCharacter and then triggers a refresh in Character Container to remove that name from the list
    // also closes all currently open info panes
    const removeCharacter = () => {
        deleteCharacter(user, character.id)
            .then(() => {
                setCharacterId(null)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
            })
            .then(setCharUpdated(prev => !prev))
            .catch(err => console.log(err))
    }
    // if there's no character, don't render anything
    if (!character) {
        return null
    }

    return (
        <>
        <Container fluid className="ui-container animated" style={divStyle}>
            <CloseButton
                handleClose={() => {
                    setCharacterId(null)
                    setMaterialId(null)
                    setRecipeId(null)
                    setRecipeListShow(false)}}
            />
            <Row>
                <Col>
                    <h4>{character.name}</h4>
                </Col>
            </Row>
            <Row>
                <CharacterDetails
                    user={user}
                    character={character}
                    setCharacter={setCharacter}
                    setMaterialId={setMaterialId}
                    setRecipeId={setRecipeId}
                    setRecipeListShow={setRecipeListShow}
                />
            </Row>
            <Row md="auto" className="py-2" style={{justifyContent: "center"}}>
                <Col fluid>
                <Button variant="info" onClick={() => setEditModalShow(true)}>Edit</Button>
                </Col>
                <Col>
                <Button variant="danger" onClick={() => removeCharacter()}>Delete</Button>
                </Col>
            </Row>
        </Container>
        <EditCharacterModal
            // modal needs character info to populate fields
            character={character}
            // needs user in order to validate in the backend update function
            user={user}
            // this sets the visibility of the modal when the relevant button is clicked
            show={editModalShow}
            // this is a function passed in from props that will run the patch route
            updateCharacter={updateCharacter}
            // this updates the state to trigger another useEffect pull of data
            triggerRefresh={() => {
                setUpdated(prev => !prev)
                setCharUpdated(prev => !prev)
            }}
            // this closes the modal when the submit button is pressed
            handleClose={() => {
                setEditModalShow(false)
            }} 
        />
        </>
    )
}

