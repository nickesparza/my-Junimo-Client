import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { updateSingleInventory } from '../../api/inventories'

const EditQuantityForm = (props) => {
    const { user, characterId, setInvUpdated } = props
    const [inventory, setInventory] = useState(props.inventory)
    console.log('this is the inventory in EditInventory', inventory)
    const handleChange = (e) => {
        setInventory(prevInventory => {
            let value = e.target.value
            const name = e.target.name

            const updatedInventory = {
                [name]: parseInt(value)
            }

            return {
                ...prevInventory,
                ...updatedInventory
            }
        })
    }

    const handleSubmit = (e) => {
        console.log('this is the amount we submit', parseInt(inventory.amount))
        e.preventDefault()
        updateSingleInventory(user, inventory.material.id, characterId, inventory.id, inventory.amount)
            .then(() => setInvUpdated(inventory.id))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label htmlFor='amount'>Quantity</Form.Label>
                    <Form.Control
                        type='number'
                        name='amount'
                        defaultValue={inventory.amount}
                        placeholder='Enter amount'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' variant='primary' size='sm' type='submit' onClick={handleSubmit}>Edit Amount</Button>
            </Form>
        </div>
    )
}

export default EditQuantityForm