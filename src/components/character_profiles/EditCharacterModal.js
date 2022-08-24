import { useState } from "react"
import { Modal } from "react-bootstrap"
import CharacterForm from "../shared/CharacterForm"

const EditCharacterModal = (props) => {
    const {show, handleClose, updateCharacter, user} = props
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
        updateCharacter(user, character.id)
        // patient.doctors = props.patient.doctors
        // patient.medicines = props.patient.medicines
        // if (!patient.treatment) {
        //     patient.treatment = 'No treatment assigned.'
        // }
        // updatePatient(user, patient)
        //     .then(() => handleClose())
        //     .then(() => {
        //         msgAlert({
        //             heading: 'Success',
        //             message: messages.editPatientSuccess,
        //             variant: 'success'
        //         })
        //     })
        //     .then(() => triggerRefresh())
        //     .catch(() => {
        //         msgAlert({
        //             heading: 'Error',
        //             message: messages.editPatientFailure,
        //             variant: 'danger'
        //         })
        //     })
    }

    return (
        <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton/>
                <Modal.Body>
                        <CharacterForm character={character} heading="EditCharacter" handleChange={handleChange} handleSubmit={handleSubmit}/>
                </Modal.Body>
            </Modal>
    )
}

export default EditCharacterModal