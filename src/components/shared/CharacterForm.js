import { Form, Container, Button } from "react-bootstrap"

const CharacterForm = (props) => {
    const { character, heading, handleChange, handleSubmit } = props

    return (
        <Container className='justify-content-center my-3'>
            <h2>{heading}</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='name'>Name</Form.Label>
                    <Form.Control
                        required
                        type='text'
                        name='name'
                        maxLength={12}
                        value={character.name}
                        placeholder='Enter character name'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='Platform'>Platform</Form.Label>
                    <Form.Control
                        required
                        name='Platform'
                        value={character.Platform}
                        type='text'
                        placeholder='Switch, PS4, PC, etc.'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='farm_name'>Farm Name</Form.Label>
                    <Form.Control
                        required
                        name='farm_name'
                        maxLength={12}
                        value={character.farm_name}
                        type='text'
                        placeholder='Enter farm name'
                        onChange={handleChange}
                    />
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
                        maxLength={12}
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
                        <option value="C1">Cat 1</option>
                        <option value="C2">Cat 2</option>
                        <option value="C3">Cat 3</option>
                        <option value="D1">Dog 1</option>
                        <option value="D2">Dog 2</option>
                        <option value="D3">Dog 3</option>
                    </Form.Select>
                    <Form.Label htmlFor='love_interest'>Love Interest</Form.Label>
                    <Form.Select
                        name='love_interest'
                        value={character.love_interest}
                        onChange={handleChange}
                    >
                        <option>Choose love interest</option>
                        <option value="AL">Alex</option>
                        <option value="EL">Elliot</option>
                        <option value="HA">Harvey</option>
                        <option value="SA">Sam</option>
                        <option value="SE">Sebastian</option>
                        <option value="SH">Shane</option>
                        <option value="AB">Abigail</option>
                        <option value="EM">Emily</option>
                        <option value="HL">Haley</option>
                        <option value="LE">Leah</option>
                        <option value="MA">Maru</option>
                        <option value="PE">Penny</option>
                        <option value="KR">Krobus</option>
                    </Form.Select>
                    <Form.Label htmlFor='horse_name'>Horse Name</Form.Label>
                    <Form.Control
                        name='horse_name'
                        maxLength={12}
                        value={character.horse_name}
                        type='text'
                        placeholder='Enter horse name'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='total_g'>Total Money</Form.Label>
                    <Form.Control
                        name='total_g'
                        min={0}
                        max={999999}
                        value={character.total_g}
                        type='number'
                        placeholder='Enter total g'
                        onChange={handleChange}
                    />
                    <Form.Label htmlFor='year'>Year</Form.Label>
                    <Form.Control
                        name='year'
                        value={character.year}
                        type='number'
                        placeholder='Enter current year'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className="my-2" type="submit">
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default CharacterForm