import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ProfileContainer } from './character_profiles/ProfileContainer'
import CharacterContainer from "./characters/CharacterContainer"
import { InfoContainer } from "./info/InfoContainer"

const UserHome = (props) => {
    const [characterId, setCharacterId] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    const [recipeList, setRecipeList] = useState(null)
    const [recipeListShow, setRecipeListShow] = useState(false)
    const [invUpdated, setInvUpdated] = useState(false)
    const [charUpdated, setCharUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        console.log('useEffect has run to get the entire recipe list. This will probably change.')
        setRecipeList([
            {
                name: "gate",
                id: 1,
                description: "Allows you to pass through a fence.",
                ingredients: [
                    {name: "wood", amount: 10}
                ],
            },
            {
                name: "stone wall",
                id: 2,
                description: "Last longer than a wooden fence.",
                ingredients: [
                    {name: "stone", amount: 15}
                ]
            }
        ])
    }, [])

    const divStyle = {
        // border: "2px solid black",
        padding: "10px"
    }

    return (
        <Container fluid style={{height: "85%"}}>
            <Row>
                <Col md={3} style={divStyle}>
                    <CharacterContainer
                        user={user}
                        charUpdated={charUpdated}
                        setCharacterId={setCharacterId}
                        setMaterialId={setMaterialId}
                        setRecipeId={setRecipeId}
                        setRecipeListShow={setRecipeListShow}
                    />
                </Col>
                {
                    characterId
                    ?
                    <Col md={5} style={divStyle}>
                        <ProfileContainer
                            user={user}
                            characterId={characterId}
                            invUpdated={invUpdated}
                            setCharacterId={setCharacterId}
                            setCharUpdated={setCharUpdated}
                            setMaterialId={setMaterialId}
                            setRecipeId={setRecipeId}
                            setRecipeListShow={setRecipeListShow}
                        />
                    </Col>
                    :
                    null
                }
                {
                    characterId && materialId || recipeId || recipeListShow
                    ?
                    <Col md={4} style={divStyle}>
                        <InfoContainer
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