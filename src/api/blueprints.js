import apiUrl from '../apiConfig'
import axios from 'axios'

// get all recipes
export const getAllBlueprints = (user) => {
    console.log('getAllBlueprints route was hit')
    return axios({
		url: apiUrl + `/blueprints`,
		method: 'GET',
	})
}

// get one recipe
export const getOneBlueprint = (blueprintId) => {
    console.log(`getOneBlueprint route was hit for recipe with ID ${blueprintId}`)
    return axios({
		url: apiUrl + `/blueprints/${blueprintId}`,
		method: 'GET',
	})
}