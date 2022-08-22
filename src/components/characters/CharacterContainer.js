import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ProfileContainer } from "../character_profiles/ProfileContainer"
import CharacterList from "./CharacterList"
import { InfoContainer } from "../materials/InfoContainer"

const CharacterContainer = (props) => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [recipeListShow, setRecipeListShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        // console.log('useEffect ran in the CharacterContainer')
        // there will be a fetch here to get all characters from user
        setCharacters(user.characters)
        setRecipeList([
            {
                name: "gate",
                id: 1,
                description: "Allows you to pass through a fence.",
                ingredients: [
                    {name: "wood", amount: 10}
                ],
            }
        ])
    }, [updated])

    const divStyle = {
        border: "2px solid black",
        padding: "10px"
    }

    return (
        <Container fluid style={{alignItems: "stretch"}}>
            <Row>
                <Col xs={2} style={divStyle}>
                    <CharacterList
                        characters={characters}
                        setCharacter={setCharacter}
                        setMaterialId={setMaterialId}
                        setRecipeId={setRecipeId}
                        setRecipeListShow={setRecipeListShow}
                    />
                </Col>
                {
                    character
                    ?
                    <Col xs={6} style={divStyle}>
                        <ProfileContainer
                            character={character}
                            setCharacter={setCharacter}
                            setMaterialId={setMaterialId}
                            setRecipeId={setRecipeId}
                            setRecipeListShow={setRecipeListShow}
                        />
                    </Col>
                    :
                    null
                }
                {
                    character && materialId || recipeId || recipeListShow
                    ?
                    <Col style={divStyle}>
                        <InfoContainer
                            character={character}
                            materialId={materialId}
                            setMaterialId={setMaterialId}
                            recipeId={recipeId}
                            setRecipeId={setRecipeId}
                            recipeList={recipeList}
                            recipeListShow={recipeListShow}
                            setRecipeListShow={setRecipeListShow}
                        />
                    </Col>
                    :
                    null
                }
            </Row>
        </Container>
    )
}

export default CharacterContainer