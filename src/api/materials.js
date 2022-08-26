import apiUrl from '../apiConfig'
import axios from 'axios'

// get all materials
export const getAllMaterials = () => {
    console.log('getAllMaterials route was hit')
    return axios({
		url: apiUrl + `/materials`,
		method: 'GET',
	})
}

// get one material
export const getOneMaterial = (materialId) => {
    console.log(`getOneMaterial route was hit for material with ID ${materialId}`)
    return axios({
		url: apiUrl + `/materials/${materialId}`,
		method: 'GET',
	})
}