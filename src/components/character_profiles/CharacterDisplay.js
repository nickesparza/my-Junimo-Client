
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
            <div>Proprieter of {character.farm_name}</div>
            <div>Year {character.year}</div>
        </div>
    )
}