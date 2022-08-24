import { useEffect, useState } from "react"
import { CharacterDetails } from "./CharacterDetails"
import { Container, Row, Col } from "react-bootstrap"
import EditCharacterModal from "./EditCharacterModal"
import { updateCharacter, getOneCharacter } from "../../api/characters"


export const ProfileContainer = (props) => {
    const { user, characterId, setMaterialId, setRecipeId, setRecipeListShow } = props
    
    const [character, setCharacter] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    // run getOneCharacter in here instead of in UserHome???
    useEffect(() => {
        console.log('useEffect ran in the ProfileContainer')
        getOneCharacter(user, characterId)
            .then(res => setCharacter(res.data.character))
            .catch(err => console.log(err))
        console.log('this is the character', character)
    }, [characterId])

    const divStyle = {
        // border: "2px solid black",
        width: "100%",
        height: "100%"
    }

    if (!character) {
        return null
    }

    return (
        <>
        <Container fluid className="ui-container" style={divStyle}>
            <Row>
                <Col>
                    <h4>{character.name}</h4>
                </Col>
                <Col style={{alignSelf: "center", textAlign: "end"}}>
                    <button onClick={() => {
                    setEditModalShow(true)
                    }}
                    >
                    Edit
                    </button>
                </Col>
            </Row>
            <Row>
                <CharacterDetails
                    character={character}
                    setCharacter={setCharacter}
                    setMaterialId={setMaterialId}
                    setRecipeId={setRecipeId}
                    setRecipeListShow={setRecipeListShow}
                />
            </Row>
            <Row md="auto" className="py-2" style={{justifyContent: "center"}}>
                {/* <Col md={6} style={{textAlign: "center"}}> */}
                    <button onClick={() => {
                        setMaterialId(null)
                        setRecipeId(null)
                        setRecipeListShow(prev => !prev)
                        }}
                        >
                        Show Recipes
                    </button>
                {/* </Col> */}
            </Row>
        </Container>
        <EditCharacterModal
            // modal needs patient info to populate fields
            character={character}
            // send state of treatmentModalShow so the modal knows which form to render
            // needs user in order to validate in the backend update function
            user={user}
            // this sets the visibility of the modal when the relevant button is clicked
            show={editModalShow}
            // this is a function passed in from props that will run the patch route
            updateCharacter={updateCharacter}
            // this updates the state to trigger another useEvent pull of data
            triggerRefresh={() => setUpdated(prev => !prev)}
            // this closes the modal when the submit button is pressed
            handleClose={() => {
                setEditModalShow(false)
            }} 
        />
        </>
    )
}

