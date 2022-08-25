import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ProfileContainer } from './character_profiles/ProfileContainer'
import CharacterContainer from "./characters/CharacterContainer"
import { InfoContainer } from "./info/InfoContainer"

const UserHome = (props) => {
    const [characterId, setCharacterId] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    const [recipeListShow, setRecipeListShow] = useState(false)
    const [invUpdated, setInvUpdated] = useState(false)
    const [charUpdated, setCharUpdated] = useState(false)
    const user = props.user

    const divStyle = {
        // border: "2px solid black",
        padding: "10px",
        height: "100%"
    }

    return (
        <Container fluid style={{height: "90%"}}>
            <Row style={{height: "100%"}}>
                <Col lg={3} style={divStyle}>
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
                    <Col lg={5} style={divStyle}>
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
                    <Col lg={4} style={divStyle}>
                        <InfoContainer
                            user={user}
                            materialId={materialId}
                            setMaterialId={setMaterialId}
                            recipeId={recipeId}
                            setRecipeId={setRecipeId}
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