// get all characters
const getAllCharacters = (user) => {
    console.log(`getAllCharacters route was hit for ${user.email}`)
}

// get one character
const getOneCharacter = (user, characterId) => {
    console.log(`getOneCharacter route was hit for character with ID ${characterId} belonging to ${user.email}`)
}

// create a character
const createCharacter = (user, newCharacter) => {
    console.log(`createCharacter route was hit for new character ${newCharacter.name} belonging to user ${user.email}`)
}

// update a character
const updateCharacter = (user, updatedCharacter) => {
    console.log(`updateCharacter route was hit for updated character ${updatedCharacter.name} belonging to ${user.email}`)
}

// delete a character
const deleteCharacter = (user, characterId) => {
    console.log(`deleteCharacter route was hit for character with ID ${characterId} belonging to user ${user.email}`)
}