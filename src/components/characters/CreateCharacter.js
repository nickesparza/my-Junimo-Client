// page for creating a new character
import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { Container } from "react-bootstrap"
import { createCharacter } from "../../api/characters"
import { createInventory } from "../../api/inventories"
import CharacterForm from "../shared/CharacterForm"

const CreateCharacter = (props) => {
    const user = props.user
    const navigate = useNavigate()
    const [character, setCharacter] = useState({
        name: '',
        Platform: '',
        farm_name: '',
        pet_type: '',
        pet_name: '',
        pet_image: '',
        love_interest: '',
        horse_name: '',
        total_g: 0,
        year: 1
    })

    // this function handles changes in the form
    // new information entered updates the corresponding key in state
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
        character.total_g = parseInt(character.total_g)
        character.year = parseInt(character.year)
        console.log('info was submitted', character)
        createCharacter(user, character)
            .then(res =>{
                const characterId = res.data.character.id
                for (let i=1; i <= 80; i++) {
                    createInventory(user, i, characterId)
                        .then(res => console.log('this is the response from inventory creation', res.data))
                        .catch(err => console.log(err))
                }
            })
            .then(navigate('/'))
            .catch(err => console.log(err))
        
        }

    return (
        <Container className="ui-container my-3">
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