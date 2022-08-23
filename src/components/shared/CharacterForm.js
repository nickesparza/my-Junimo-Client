import { Form, Container, Button } from "react-bootstrap"

const CharacterForm = (props) => {
    const { character, heading, handleChange, handleSubmit } = props

    return (
        <Container className='justify-content-center'>
            <h1>{heading}</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        name='name'
                        value={character.name}
                        placeholder='Enter character name'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='platform'>Platform</Form.Label>
                    <Form.Control
                        required
                        name='platform'
                        value={character.platform}
                        type='text'
                        placeholder='Switch, PS4, PC, etc.'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='farm_type'>Farm Type</Form.Label>
                    <Form.Select
                        required
                        name='farm_type'
                        defaultValue={character.farm_type}
                        onChange={handleChange}
                    >
                        <option>Choose Farm Type</option>
                        <option value="Standard">Standard</option>
                        <option value="Riverland">Riverland</option>
                        <option value="Forest">Forest</option>
                        <option value="Hill-top">Hill-top</option>
                        <option value="Wilderness">Wilderness</option>
                        <option value="Four Corners">Four Corners</option>
                        <option value="Beach">Beach</option>
                    </Form.Select>
                    <Form.Label htmlFor='pet_type'>Pet Type</Form.Label>
                    <Form.Select
                        required
                        name='pet_type'
                        defaultValue={character.pet_type}
                        onChange={handleChange}
                    >
                        <option>Choose Pet Type</option>
                        <option value="Cat">Cat</option>
                        <option value="Dog">Dog</option>
                    </Form.Select>
                    <Form.Label htmlFor='pet_name'>Pet Name</Form.Label>
                    <Form.Control
                        name='pet_name'
                        value={character.pet_name}
                        type='text'
                        placeholder="Enter pet's name"
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='pet_image'>Pet Image</Form.Label>
                    <Form.Select
                        required
                        name='pet_image'
                        value={character.pet_image}
                        onChange={handleChange}
                    >
                        <option>Choose image</option>
                        <option value="image1">Image 1</option>
                        <option value="image2">Image 2</option>
                        <option value="image 3">Image 3</option>
                    </Form.Select>
                    <Form.Label htmlFor='love_interest'>Love Interest</Form.Label>
                    <Form.Control
                        name='love_interest'
                        value={character.love_interest}
                        type='text'
                        placeholder='Separate multiple love interests with a comma if necessary'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='horse_name'>Horse Name</Form.Label>
                    <Form.Control
                        name='horse_name'
                        value={character.horse_name}
                        type='text'
                        placeholder='Enter horse name'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='money'>Total Money</Form.Label>
                    <Form.Control
                        name='money'
                        value={character.money}
                        type='number'
                        placeholder='Enter total money'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default CharacterForm