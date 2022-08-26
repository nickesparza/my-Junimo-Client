// this component takes the character info, processes it, and renders all the information
// including name, farm name, year, horse/pet names, images, etc.
import { Container, Row, Col } from "react-bootstrap"
export const CharacterDisplay = (props) => {
    const character = props.character
    const petImagePath = "/images/petsprites/" + props.character.pet_image
    return (
        <Container>
            <Row style={{alignItems: "center"}}>
                <Col>
                    <div style={{textAlign: "center"}}>Proprieter of {character.farm_name}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img src="/images/petsprites/Horse.png"/>
                        <p>{character.horse_name}</p>
                    </div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img src={petImagePath}/>
                        <p>{character.pet_name}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{textAlign: "center"}}>Love Interest: {character.love_interest}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>Year {character.year}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>{character.total_g}g</div>
                </Col>
            </Row>
        </Container>
    )
}