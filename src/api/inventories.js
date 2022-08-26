import apiUrl from '../apiConfig'
import axios from 'axios'

// get one inventory
export const getOneInventory = (user, characterId) => {
    console.log(`getOneInventory route was hit for character with id ${characterId}`)
    return axios({
		url: apiUrl + `/inventory/${characterId}`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}
// create inventory
export const createInventory = (user, materialId, characterId) => {
    console.log(`createInventory route was hit for character with id ${characterId}, for material with id ${materialId}`)
    return axios({
		url: apiUrl + `/inventory/create/${characterId}`,
		method: 'POST',
		headers: {
			Authorization: `Token ${user.token}`,
		},
        data: {
            material_id: materialId,
            character_id: characterId,
            amount: 0
        },
	})
}

export const editOneInventory = (inventoryId) => {
    console.log(`editOneInventory route was hit for inventory id ${inventoryId}`)
}