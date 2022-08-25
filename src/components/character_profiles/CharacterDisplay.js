import { Container, Row, Col } from "react-bootstrap"
export const CharacterDisplay = (props) => {
    const character = props.character
    return (
        <Container>
            <Row>
                <Col>
                    <div style={{textAlign: "center"}}>Proprieter of {character.farm_name}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>Year {character.year}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>{character.total_g}g</div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{textAlign: "center"}}>Love Interest: {character.love_interest}</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>{character.horse_name} the horse</div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>{character.pet_name} the {character.pet_type}</div>
                </Col>
            </Row>
        </Container>
    )
}