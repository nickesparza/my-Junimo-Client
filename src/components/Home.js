import UserHome from "./UserHome"
import NoUserHome from "./NoUserHome"
import { Container } from "react-bootstrap"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
    const {user} = props


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
        return (
            <NoUserHome/>
        )
    }

}

export default Home
