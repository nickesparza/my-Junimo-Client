import { CharacterPreview } from "./CharacterPreview"

const CharacterList = (props) => {
    const characters = props.characters

    let charPreviews
    charPreviews = characters.map((character, index) => {
        return <CharacterPreview key={index} character={character}/>
    })

    console.log('this is what is inside charPreviews', charPreviews)

    return (
        <div style={{border: "2px solid black", display: "inline-block"}}>
            <p>This is the Character List component.</p>
            {charPreviews}
        </div>
    )
}

export default CharacterList