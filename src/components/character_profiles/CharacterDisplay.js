// this component takes the character info, processes it, and renders all the information
// including name, farm name, year, horse/pet names, images, etc.
import { Container, Row, Col } from "react-bootstrap"
export const CharacterDisplay = (props) => {
    const character = props.character
    // because of how love interests and pet images are stored in the backend (as a two-letter shorthand)
    // CharacterDisplay needs to set the data coming back to a useable format for the frontend
    // elongates both pet_image and love_interest to have a workable image path and a full name
    let petUrlEndpoint
    let loveInterestName
    switch(character.pet_image) {
        case 'C1':
            petUrlEndpoint = "Cat_1.png"
            break
        case 'C2':
            petUrlEndpoint = "Cat_2.png"
            break
        case 'C3':
            petUrlEndpoint = "Cat_3.png"
            break
        case 'D1':
            petUrlEndpoint = "Dog_1.png"
            break
        case 'D2':
            petUrlEndpoint = "Dog_2.png"
            break
        case 'D3':
            petUrlEndpoint = "Dog_3.png"
            break
        default:
            petUrlEndpoint = "Cat_1.png"
    }
    switch(character.love_interest) {
        case 'AL':
            loveInterestName = "Alex"
            break
        case 'EL':
            loveInterestName = "Elliot"
            break
        case 'HA':
            loveInterestName = "Harvey"
            break
        case 'SA':
            loveInterestName = "Sam"
            break
        case 'SE':
            loveInterestName = "Sebastian"
            break
        case 'SH':
            loveInterestName = "Shane"
            break
        case 'AB':
            loveInterestName = "Abigail"
            break
        case 'EM':
            loveInterestName = "Emily"
            break
        case 'HL':
            loveInterestName = "Haley"
            break
        case 'LE':
            loveInterestName = "Leah"
            break
        case 'MA':
            loveInterestName = "Maru"
            break
        case 'PE':
            loveInterestName = "Penny"
            break
        case 'KR':
            loveInterestName = "Krobus"
            break
        default:
            loveInterestName = "None"
    }

    const petImagePath = "/images/petsprites/" + petUrlEndpoint

    return (
        <Container>
            <Row style={{alignItems: "center"}}>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img title={character.farm_name} alt="" src="images/Standard_Farm_Map_Icon.png"/>
                        <div>{character.farm_name}</div>
                    </div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img title="Horse!" alt="" src="/images/petsprites/Horse.png"/>
                        <p>{character.horse_name}</p>
                    </div>
                </Col>
                <Col>
                    <div title={character.pet_type} style={{textAlign: "center"}}>
                        <img src={petImagePath} alt="The pet you chose"/>
                        <p>{character.pet_name}</p>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img title="Love Interest" alt="" src="images/Marriage_Icon.png"/>
                        {loveInterestName}
                    </div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img title="Current Year" alt="" src="images/30px-Time_Icon.png"/>
                        Year {character.year}
                    </div>
                </Col>
                <Col>
                    <div style={{textAlign: "center"}}>
                        <img title="Current Funds" alt="" src="images/Gold.png" style={{width: "30px"}}/>
                        {character.total_g}g
                    </div>
                </Col>
            </Row>
        </Container>
    )
}