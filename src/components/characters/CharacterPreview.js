// this component shows an individual character name and sets state for a fetch in Profile Container
export const CharacterPreview = (props) => {
    const {character, setCharacterId, setMaterialId, setRecipeId, setRecipeListShow} = props

    const divStyle = {
        border: "4px solid rgb(229,120,61)",
        backgroundColor: "rgb(255,213,139)",
        margin: "5px",
        padding: "2px"
    }
    
    return (
        <div className="selector"
            style={divStyle}
            onClick={() => {
                // on click:
                // set materialId, recipeId, and recipeListShow to falsy values to remove the Info Container if it is currently displayed
                // set characterId variable in UserHome, to trigger render of ProfileContainer
                // console.log('this is the character', character)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
                setCharacterId(character.id)
                }}>
            <h5 style={{margin: "0"}}>{character.name}</h5>
        </div>
    )
}

