import UserHome from "./UserHome"
import NoUserHome from "./NoUserHome"

const Home = (props) => {
	// const { msgAlert, user } = props
	console.log('props in home', props)
    const {user} = props


    if (user) {
        return (
            <>
                <h2>Hello {user.email}</h2>
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
