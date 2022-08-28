import { useState } from 'react'
import EditQuantityForm from './EditQuantityForm'
import { updateSingleInventory } from '../../api/inventories'

const EditQuantity = (props) => {
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
        e.preventDefault()
        console.log('this is the amount we submit', parseInt(inventory.amount))
        updateSingleInventory(user, inventory.material.id, characterId, inventory.id, inventory.amount)
            .then(() => setInvUpdated(prev => !prev))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <EditQuantityForm inventory={inventory} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default EditQuantity