import {Form} from 'react-bootstrap'
import { MaterialPreview } from '../character_profiles/MaterialPreview'

const EditQuantityForm = (props) => {
    const inventory = props.character.inventory
    const materialIndex = props.materialIndex
    return (
        <div style={{border: "2px solid black"}}>
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