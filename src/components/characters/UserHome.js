import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ProfileContainer } from "../character_profiles/ProfileContainer"
import CharacterContainer from "./CharacterContainer"
import { InfoContainer } from "../materials/InfoContainer"
import { getAllCharacters, getOneCharacter } from "../../api/characters"

const UserHome = (props) => {
    const [characters, setCharacters] = useState([])
    const [character, setCharacter] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [recipeListShow, setRecipeListShow] = useState(false)
    const [updated, setUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        console.log('useEffect has run to get the entire recipe list. This should only happen once.')
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
    }, [])

    useEffect(() => {
        // console.log('useEffect ran in the CharacterContainer')
        // there will be a fetch here to get all characters from user
        getAllCharacters(user)
            // .then(res => {
            //     setCharacters(res.data.characters)
            // })
        // THIS IS A PLACEHOLDER STATE MOD UNTIL REAL DATA IS COMING IN
        setCharacters(user.characters)
    }, [updated])

    const selectCharacter = (id) => {
        getOneCharacter(user, id)
            // .then (res => {
            //     setCharacter(res.data.character)
            // })
    }

    const divStyle = {
        // border: "2px solid black",
        padding: "10px"
    }

    return (
        <Container fluid style={{alignItems: "stretch", height: "85%"}}>
            <Row>
                <Col md={3} style={divStyle}>
                    <CharacterContainer
                        characters={characters}
                        setCharacter={setCharacter}
                        selectCharacter={selectCharacter}
                        setMaterialId={setMaterialId}
                        setRecipeId={setRecipeId}
                        setRecipeListShow={setRecipeListShow}
                    />
                </Col>
                {
                    character
                    ?
                    <Col md={5} style={divStyle}>
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
                    <Col md={4} style={divStyle}>
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

export default UserHome