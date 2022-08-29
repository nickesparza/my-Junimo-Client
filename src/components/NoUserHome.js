// this component is displayed when a user accesses the site but is not logged in
import { Container } from "react-bootstrap"

const NoUserHome = () => {
    return (
        // UI box with splash image
        // TODO: Create splash image/logo
        <Container className="ui-container my-5" style={{height: "50%", textAlign: "center", alignItems: "center"}}>
                <h2>Welcome to MyJunimo!</h2>
                <p>A Stardew Valley Companion</p>
        </Container>
    )
}

export default NoUserHome