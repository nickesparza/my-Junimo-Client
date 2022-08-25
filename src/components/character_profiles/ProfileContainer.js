import { useEffect, useState } from "react"
import { CharacterDetails } from "./CharacterDetails"
import { Container, Row, Col, Button } from "react-bootstrap"
import CloseButton from "../shared/CloseButton"
import EditCharacterModal from "./EditCharacterModal"
import { updateCharacter, deleteCharacter, getOneCharacter } from "../../api/characters"


export const ProfileContainer = (props) => {
    const { user, characterId, setCharacterId, setCharUpdated, setMaterialId, setRecipeId, setRecipeListShow } = props
    
    const [character, setCharacter] = useState(null)
    const [editModalShow, setEditModalShow] = useState(false)
    const [updated, setUpdated] = useState(false)

    useEffect(() => {
        console.log('useEffect ran in the ProfileContainer')
        getOneCharacter(user, characterId)
            .then(res => {
                let loveInterest = res.data.character.love_interest
                switch(res.data.character.pet_image) {
                    case 'C1':
                        res.data.character.pet_image = "Cat_1.png"
                        break
                    case 'C2':
                        res.data.character.pet_image = "Cat_2.png"
                        break
                    case 'C3':
                        res.data.character.pet_image = "Cat_3.png"
                        break
                    case 'D1':
                        res.data.character.pet_image = "Dog_1.png"
                        break
                    case 'D2':
                        res.data.character.pet_image = "Dog_2.png"
                        break
                    case 'D3':
                        res.data.character.pet_image = "Dog_3.png"
                        break
                }
                switch(res.data.character.love_interest) {
                    case 'AL':
                        res.data.character.love_interest = "Alex"
                        break
                    case 'EL':
                        res.data.character.love_interest = "Elliot"
                        break
                    case 'HA':
                        res.data.character.love_interest = "Harvey"
                        break
                    case 'SA':
                        res.data.character.love_interest = "Sam"
                        break
                    case 'SE':
                        res.data.character.love_interest = "Sebastian"
                        break
                    case 'SH':
                        res.data.character.love_interest = "Shane"
                        break
                    case 'AB':
                        res.data.character.love_interest = "Abigail"
                        break
                    case 'EM':
                        res.data.character.love_interest = "Emily"
                        break
                    case 'HL':
                        res.data.character.love_interest = "Haley"
                        break
                    case 'LE':
                        res.data.character.love_interest = "Leah"
                        break
                    case 'MA':
                        res.data.character.love_interest = "Maru"
                        break
                    case 'PE':
                        res.data.character.love_interest = "Penny"
                        break
                    case 'KR':
                        res.data.character.love_interest = "Krobus"
                        break
                }
                return res
            })
            .then(res => setCharacter(res.data.character))
            .catch(err => console.log(err))
    }, [characterId, updated])

    const divStyle = {
        width: "100%",
        height: "100%"
    }

    const removeCharacter = () => {
        deleteCharacter(user, character.id)
            .then(setCharUpdated(prev => !prev))
            .then(() => {
                setCharacterId(null)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
            })
            .catch(err => console.log(err))
    }

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

