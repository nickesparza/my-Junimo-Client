import apiUrl from '../apiConfig'
import axios from 'axios'

// get a a collection of inventories belonging to a character
export const getCharacterInventory = (user, characterId) => {
    console.log(`getCharacterInventory route was hit for character with id ${characterId}`)
    return axios({
		url: apiUrl + `/inventory/${characterId}`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`,
		},
	})
}

// get a single entry in an inventory belonging to a character
export const getSingleInventory = (user, characterId, inventoryId) => {
    console.log(`getSingleInventory route was hit for character with id ${characterId} and inventory id ${inventoryId}`)
    return axios({
		url: apiUrl + `/inventory/${inventoryId}/${characterId}`,
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

export const updateSingleInventory = (user, materialId, characterId, inventoryId, newAmount) => {
    console.log(`editOneInventory route was hit for inventory id ${inventoryId} belonging to character id ${characterId}`)
    console.log({
        inventory: {
            material_id: materialId,
            character_id: characterId,
            amount: newAmount
        }
    })
    return axios({
		url: apiUrl + `/inventory/edit/${inventoryId}/${characterId}`,
		method: 'PATCH',
		headers: {
			Authorization: `Token ${user.token}`,
		},
        data: {
                material_id: materialId,
                character_id: characterId,
                amount: newAmount
        },
	})
}