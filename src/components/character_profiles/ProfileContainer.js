import { CharacterDetails } from "./CharacterDetails"
import { Container, Row, Col } from "react-bootstrap"

export const ProfileContainer = (props) => {
    const { character, setCharacter, setMaterialId, setRecipeId, setRecipeListShow } = props

    const divStyle = {
        // border: "2px solid black",
        width: "100%",
        height: "100%",
        border: "4px solid rgb(229,120,61)"
    }

    return (
        <Container fluid className="ui-container" style={divStyle}>
            <Row>
                <Col>
                    <h4>{character.name}</h4>
                </Col>
                <Col style={{alignSelf: "center", textAlign: "end"}}>
                    <button onClick={() => {
                    setMaterialId(null)
                    setRecipeId(null)
                    setRecipeListShow(prev => !prev)
                    }}
                    >
                    Show Recipes
                    </button>
                </Col>
            </Row>
            <CharacterDetails
                character={character}
                setCharacter={setCharacter}
                setMaterialId={setMaterialId}
                setRecipeId={setRecipeId}
                setRecipeListShow={setRecipeListShow}
            />
        </Container>
    )
}

