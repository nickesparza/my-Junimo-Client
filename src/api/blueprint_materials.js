import apiUrl from '../apiConfig'
import axios from 'axios'

// get one blueprint_materials list
export const getOneBlueprintMaterials = (blueprintId) => {
    console.log(`getOneBlueprintMaterials route was hit for recipe with ID ${blueprintId}`)
    return axios({
		url: apiUrl + `/recipe_materials/${blueprintId}`,
		method: 'GET',
	})
}