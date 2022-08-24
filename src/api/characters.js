import apiUrl from '../apiConfig'
import axios from 'axios'

// get all characters
export const getAllCharacters = (user) => {
    console.log(`getAllCharacters route was hit for ${user.email}`)
    return axios({
		url: apiUrl + `/characters`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`,
		}
	})
}

// get one character
export const getOneCharacter = (user, characterId) => {
    console.log(`getOneCharacter route was hit for character with ID ${characterId} belonging to ${user.email}`)
    return axios({
		url: apiUrl + `/characters/${characterId}`,
		method: 'GET',
		headers: {
			Authorization: `Token ${user.token}`,
		}
	})
}

// create a character
export const createCharacter = (user, newCharacter) => {
    console.log(`createCharacter route was hit for new character ${newCharacter.name} belonging to user ${user.email}`)
    console.log('this is the newCharacter', newCharacter)
    return axios({
		url: apiUrl + '/characters/',
		method: 'POST',
		headers: {
			Authorization: `Token ${user.token}`,
		},
        data: {
            character: newCharacter
        },
	})
}

// update a character
export const updateCharacter = (user, updatedCharacter) => {
    console.log(`updateCharacter route was hit for updated character ${updatedCharacter.name} belonging to ${user.email}`)
}

// delete a character
export const deleteCharacter = (user, characterId) => {
    console.log(`deleteCharacter route was hit for character with ID ${characterId} belonging to user ${user.email}`)
}