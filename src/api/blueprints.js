import apiUrl from '../apiConfig'
import axios from 'axios'

// get all blueprints
export const getAllBlueprints = () => {
    console.log('getAllBlueprints route was hit')
    return axios({
		url: apiUrl + `/blueprints`,
		method: 'GET',
	})
}

// get one blueprint
export const getOneBlueprint = (blueprintId) => {
    console.log(`getOneBlueprint route was hit for recipe with ID ${blueprintId}`)
    return axios({
		url: apiUrl + `/blueprints/${blueprintId}`,
		method: 'GET',
	})
}