// this component conditionally renders either a splash page or the user interface depending on user login status
import UserHome from "./UserHome"
import NoUserHome from "./NoUserHome"
import { Container } from "react-bootstrap"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
    const {user} = props

    // if the user exists, show them the whole site
    if (user) {
        return (
            <>
            <Container fluid className="mt-3">
                <div className="ui-container"><h2>Welcome to MyJunimo!</h2></div>
            </Container>
                <UserHome user={user}/>
            </>
        )
    } else {
        // otherwise, just show the splash page
        return (
            <NoUserHome/>
        )
    }

}

export default Home
