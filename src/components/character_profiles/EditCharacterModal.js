import { useState } from "react"
import { Modal } from "react-bootstrap"
import CharacterForm from "../shared/CharacterForm"

const EditCharacterModal = (props) => {
    const {show, handleClose, updateCharacter, user, triggerRefresh} = props
    const [character, setCharacter] = useState(props.character)

    const handleChange = (e) => {
        setCharacter(prevCharacter => {
            let value = e.target.value
            const name = e.target.name

            const updatedCharacter = {
                [name]: value
            }

            return {
                ...prevCharacter,
                ...updatedCharacter
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        character.total_g = parseInt(character.total_g)
        character.year = parseInt(character.year)
        updateCharacter(user, character)
            .then(() => handleClose())
            // .then(() => {
            //     msgAlert({
            //         heading: 'Success',
            //         message: messages.editPatientSuccess,
            //         variant: 'success'
            //     })
            // })
            .then(() => triggerRefresh())
            .catch(err => console.log(err))
            // .catch(() => {
            //     msgAlert({
            //         heading: 'Error',
            //         message: messages.editPatientFailure,
            //         variant: 'danger'
            //     })
            // })
    }

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                        <CharacterForm character={character} heading="Edit Character" handleChange={handleChange} handleSubmit={handleSubmit}/>
                </Modal.Body>
            </Modal>
    )
}

export default EditCharacterModal