// this beast controls conditional rendering for the three major components of the site
// if a user exists, it shows the container with their character list
// then renders the profile container and info container conditionally depending on user inpu
import { Container, Row, Col } from "react-bootstrap"
import { useEffect, useState } from "react"
import { ProfileContainer } from './character_profiles/ProfileContainer'
import CharacterContainer from "./characters/CharacterContainer"
import { InfoContainer } from "./info/InfoContainer"

const UserHome = (props) => {
    // use character, material, and recipe IDs as state objects in order to trigger rendering
    // this way, components will only render if they have an id to fetch
    // multiple buttons across the site will set these back to null depending on what the user has clicked on
    // then the generic info components will render that requested information without having to duplicate them
    const [characterId, setCharacterId] = useState(null)
    const [materialId, setMaterialId] = useState(null)
    const [recipeId, setRecipeId] = useState(null)
    // this is also a conditional rendering variable, but for showing all recipes (since there are no ids required for that call)
    const [recipeListShow, setRecipeListShow] = useState(false)
    // this will (hopefully) be what triggers a refresh of the inventory in ProfileContainer after a material amount is updated in InfoContainer
    const [invUpdated, setInvUpdated] = useState(false)
    // this refreshes the character container if the character details are updated in the Profile Container
    // this only really matters when character name is updated, so it is immediately reflected in the larger character list
    const [charUpdated, setCharUpdated] = useState(false)
    const user = props.user

    useEffect(() => {
        console.log('UserHome was refreshed')
        console.log('invUpdated was changed. New value:', invUpdated)
    }, [invUpdated, charUpdated])

    const divStyle = {
        // border: "2px solid black",
        padding: "10px",
        height: "100%"
    }

    return (
        // if a user exists, always render the character container with their list of characters, even if it is zero
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
                {/* If state is holding a character ID, that means a user has clicked on a character */}
                {/* render the profile container which will fetch that one character's details for display */}
                {/* otherwise, show nothing (null) */}
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
                {/* if there is a character Id and ANY of the other conditional variables, that means the user has clicked on a button in Profile Container */}
                {/* show the Info Container, which will fetch conditionally depending on which Id or show variable is held in state in this component */}
                {/* otherwise, show nothing */}
                {
                    characterId && (materialId || recipeId || recipeListShow)
                    ?
                    <Col lg={4} style={divStyle}>
                        <InfoContainer
                            user={user}
                            characterId={characterId}
                            materialId={materialId}
                            invUpdated={invUpdated}
                            setMaterialId={setMaterialId}
                            recipeId={recipeId}
                            setRecipeId={setRecipeId}
                            recipeListShow={recipeListShow}
                            setRecipeListShow={setRecipeListShow}
                            setInvUpdated={setInvUpdated}
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