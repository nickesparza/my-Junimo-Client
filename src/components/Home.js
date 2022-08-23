import UserHome from "./characters/UserHome"

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
            <>
                <h2>No User Found, so imagine this is the NoUserHome component.</h2>
            </>
        )
    }

}

export default Home
