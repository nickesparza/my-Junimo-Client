import { useState, useEffect } from 'react'
import { Form, Button } from 'react-bootstrap'
// import EditQuantityForm from './EditQuantityForm'
import { updateSingleInventory } from '../../api/inventories'

const EditQuantity = (props) => {
    const { user, characterId, setInvUpdated } = props
    const [inventory, setInventory] = useState(props.inventory)

    useEffect(() => {
        console.log('useEffect ran in EditQuantity!!!!!!!!!!!!!!!!!!', inventory)
    }, [props.inventory])
    
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
        e.preventDefault()
        console.log('this is the amount we submit', parseInt(inventory.amount))
        updateSingleInventory(user, inventory.material.id, characterId, inventory.id, inventory.amount)
            .then(() => setInvUpdated(prev => !prev))
            .catch(err => console.log(err))
    }

    return (
        <div>
            {/* <EditQuantityForm inventory={inventory} handleChange={handleChange} handleSubmit={handleSubmit}/> */}
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label htmlFor='amount'>Quantity</Form.Label>
                    <Form.Control
                        type='number'
                        name='amount'
                        value={inventory.amount}
                        placeholder='Enter amount'
                        onChange={handleChange}
                    />
                </Form.Group>
                <Button className='m-2' variant='primary' size='sm' type='submit'>Edit Amount</Button>
            </Form>
        </div>
    )
}

export default EditQuantity