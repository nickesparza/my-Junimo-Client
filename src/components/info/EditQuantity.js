import { useState } from 'react'
import EditQuantityForm from './EditQuantityForm'
import { updateSingleInventory } from '../../api/inventories'

const EditQuantity = (props) => {
    const { user, inventory, characterId, setInvUpdated } = props
    const [inventoryToUpdate, setInventoryToUpdate] = useState(inventory)
    console.log('this is the inventory in EditQuantity', inventory)
    
    const handleChange = (e) => {
        setInventoryToUpdate(prevInventory => {
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
        console.log('this is the target when clicking submit', e.target.value)
        console.log('this is the amount we submit', parseInt(inventory.amount))
        updateSingleInventory(user, inventory.material.id, characterId, inventory.id, inventoryToUpdate.amount)
            .then(() => setInvUpdated(prev => !prev))
            .catch(err => console.log(err))
    }

    return (
        <div>
            <EditQuantityForm inventoryToUpdate={inventoryToUpdate} handleChange={handleChange} handleSubmit={handleSubmit}/>
        </div>
    )
}

export default EditQuantity