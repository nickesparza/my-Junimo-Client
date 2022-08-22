
export const CharacterDisplay = (props) => {
    const {character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow} = props
    return (
        <div
            onClick={() => {
                setCharacter(null)
                setMaterialId(null)
                setRecipeId(null)
                setRecipeListShow(false)
            }}
        >
            <div>Farm Type: {character.farm_type}</div>
        </div>
    )
}