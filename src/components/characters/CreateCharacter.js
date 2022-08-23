import { useState } from "react"
import { Container } from "react-bootstrap"
import { createCharacter } from "../../api/characters"
import CharacterForm from "../shared/CharacterForm"

const CreateCharacter = (props) => {
    const user = props.user

    const [character, setCharacter] = useState({
        name: '',
        platform: '',
        farm_type: '',
        pet_type: '',
        pet_name: '',
        pet_image: '',
        love_interest: '',
        horse_name: '',
        money: 0,
        year: 0
    })

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

    // handleSubmit function for when we send data to the backend
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('info was submitted', character)
        createCharacter(user, character)
        //     .then(res => navigate(`/`))
        //     .then(() => {
        //         msgAlert({
        //             heading: 'Success',
        //             message: messages.createPatientSuccess,
        //             variant: 'success'
        //         })
        //     })
        //     .catch((err) => {
        //         console.log(err)
        //         msgAlert({
        //             heading: 'Warning',
        //             message: messages.createPatientFailure,
        //             variant: 'danger'
        //         })
        //     })
        }

    return (
        <Container className="ui-container my-5">
            <CharacterForm
                character={character}
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                heading="Create New Character"
            />
        </Container>
    )
}

export default CreateCharacter