import {Form} from 'react-bootstrap'

const EditQuantityForm = (props) => {
    const inventory = props.character.inventory
    const materialIndex = props.materialIndex
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor='amount'>Quantity</Form.Label>
                    <Form.Control
                        type='text'
                        name='amount'
                        defaultValue={inventory[materialIndex].amount}
                        placeholder='Enter name'
                        onChange={() => {console.log('a change was made')}}
                    />
                </Form.Group>
                <button type='submit'>Edit Amount</button>
            </Form>
        </div>
    )
}

export default EditQuantityForm